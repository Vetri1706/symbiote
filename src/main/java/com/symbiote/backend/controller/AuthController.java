package com.symbiote.backend.controller;

import com.symbiote.backend.dto.LoginRequest;
import com.symbiote.backend.dto.LoginResponse;
import com.symbiote.backend.dto.UserDTO;
import com.symbiote.backend.entity.User;
import com.symbiote.backend.repository.UserRepository;
import com.symbiote.backend.security.JwtUtil;
import com.symbiote.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userDTO.setStatus("ACTIVE");
        UserDTO created = userService.createUser(userDTO);
        return ResponseEntity.ok(created);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            String token = jwtUtil.generateToken(user.getEmail(), user.getRole(), user.getName());
            return ResponseEntity.ok(new LoginResponse(token, user.getName(), user.getRole()));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
