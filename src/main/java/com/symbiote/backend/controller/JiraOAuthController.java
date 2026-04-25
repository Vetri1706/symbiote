package com.symbiote.backend.controller;

import com.symbiote.backend.config.JiraConfig;
import com.symbiote.backend.config.SymbioteAppConfig;
import com.symbiote.backend.entity.User;
import com.symbiote.backend.repository.UserRepository;
import com.symbiote.backend.security.JwtUtil;
import com.symbiote.backend.service.JiraOAuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@RestController
@RequestMapping("/api/jira/oauth")
@RequiredArgsConstructor
@Slf4j
public class JiraOAuthController {

    private final JiraOAuthService jiraOAuthService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final JiraConfig jiraConfig;
    private final SymbioteAppConfig appConfig;

    @GetMapping("/authorize-url")
    public ResponseEntity<?> getAuthorizeUrl() {
        log.info("Request to generate Jira Auth URL");
        try {
            String email = SecurityContextHolder.getContext().getAuthentication().getName();
            log.debug("Current user email: {}", email);
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("User not found: " + email));

            validateConfig();

            String state = jwtUtil.generateStateToken(user.getId());
            String url = buildAuthUrl(state);
            log.info("Successfully generated Jira Auth URL");
            return ResponseEntity.ok(Map.of("url", url));
        } catch (Exception e) {
            log.error("Failed to generate Jira Auth URL: {}", e.getMessage());
            return ResponseEntity.badRequest().body(Map.of(
                "error", "URL_GENERATION_FAILED",
                "message", e.getMessage()
            ));
        }
    }

    private void validateConfig() {
        if (jiraConfig.getClientId() == null || jiraConfig.getClientId().isBlank()) {
            throw new IllegalStateException("Jira Client ID is missing");
        }
        if (jiraConfig.getAuthUrl() == null || jiraConfig.getAuthUrl().isBlank()) {
            throw new IllegalStateException("Jira Auth URL is missing");
        }
        if (jiraConfig.getRedirectUri() == null || jiraConfig.getRedirectUri().isBlank()) {
            throw new IllegalStateException("Jira Redirect URI is missing");
        }
    }

    @GetMapping("/start")
    public RedirectView startOAuth() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String state = jwtUtil.generateStateToken(user.getId());
        return new RedirectView(buildAuthUrl(state));
    }

    private String buildAuthUrl(String state) {
        String scopes = jiraConfig.getScopes();
        if (scopes == null) {
            scopes = "read:jira-work write:jira-work offline_access";
        }
        // Strip quotes if present (common in .env files)
        if (scopes.startsWith("\"") && scopes.endsWith("\"")) {
            scopes = scopes.substring(1, scopes.length() - 1);
        }

        return String.format(
                "%s/authorize?audience=api.atlassian.com&client_id=%s&scope=%s&redirect_uri=%s&state=%s&response_type=code&prompt=consent",
                jiraConfig.getAuthUrl(),
                jiraConfig.getClientId(),
                URLEncoder.encode(scopes, StandardCharsets.UTF_8),
                URLEncoder.encode(jiraConfig.getRedirectUri(), StandardCharsets.UTF_8),
                state
        );
    }

    @GetMapping("/callback")
    public Object callback(@RequestParam String state, @RequestParam String code) {
        log.info("Received callback from Jira with state and code");
        try {
            Long userId = jwtUtil.getUserIdFromStateToken(state);
            log.info("Processing callback for user ID: {}", userId);
            
            jiraOAuthService.exchangeCodeForUserToken(userId, code);
            log.info("Successfully connected Jira account for user ID: {}", userId);
            
            return new RedirectView(appConfig.getFrontendUrl() + "/dashboard");
        } catch (Exception e) {
            log.error("Jira OAuth callback failed: {}", e.getMessage(), e);
            // Instead of a 500 error, redirect to dashboard with an error parameter
            return new RedirectView(appConfig.getFrontendUrl() + "/dashboard?error=jira_connection_failed&message=" + URLEncoder.encode(e.getMessage(), StandardCharsets.UTF_8));
        }
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(jiraOAuthService.getConnectionStatus(user.getId()));
    }

    @DeleteMapping("/disconnect")
    public ResponseEntity<Void> disconnect() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        jiraOAuthService.disconnect(user.getId());
        return ResponseEntity.noContent().build();
    }
}
