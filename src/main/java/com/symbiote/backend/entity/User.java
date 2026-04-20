package com.symbiote.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // ADMIN / MANAGER / TEAM_LEAD / EMPLOYEE

    @Column(nullable = false)
    private String department;

    @Column(nullable = false)
    private String status; // ACTIVE / INACTIVE

    @Column(nullable = false)
    private LocalDateTime createdAt;
}
