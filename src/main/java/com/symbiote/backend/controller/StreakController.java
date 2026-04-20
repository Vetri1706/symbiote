package com.symbiote.backend.controller;

import com.symbiote.backend.engine.StreakEngine;
import com.symbiote.backend.entity.UserStreak;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/streak")
@RequiredArgsConstructor
public class StreakController {
    private final StreakEngine streakEngine;

    @GetMapping("/{userId}")
    public ResponseEntity<UserStreak> getStreakStatus(@PathVariable Long userId) {
        Optional<UserStreak> streak = streakEngine.getStatus(userId);
        return streak.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/update/{userId}")
    public ResponseEntity<UserStreak> updateStreak(@PathVariable Long userId) {
        UserStreak updated = streakEngine.updateStreak(userId);
        return ResponseEntity.ok(updated);
    }
    @PostMapping("/reset/{userId}")
    public ResponseEntity<UserStreak> resetStreak(@PathVariable Long userId) {
        UserStreak reset = streakEngine.resetIfMissed(userId);
        if (reset != null) {
            return ResponseEntity.ok(reset);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
