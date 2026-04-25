package com.symbiote.backend.controller;

import com.symbiote.backend.entity.User;
import com.symbiote.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/setup")
@RequiredArgsConstructor
public class AdminSetupController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/create-admin")
    public String createAdmin(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        String name = request.get("name");

        if (userRepository.existsByEmail(email)) {
            return "Error: User already exists!";
        }

        User admin = User.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .name(name)
                .role("ADMIN")
                .department("SYSTEM")
                .status("ACTIVE")
                .lifetimeXp(0L)
                .weeklyXp(0L)
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(admin);
        return "Success: Admin account created for " + email;
    }
}
