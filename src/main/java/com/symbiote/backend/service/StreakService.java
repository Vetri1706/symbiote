package com.symbiote.backend.service;

import com.symbiote.backend.entity.UserStreak;
import com.symbiote.backend.repository.UserStreakRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StreakService {
    private final UserStreakRepository userStreakRepository;

    public Optional<UserStreak> getByUserId(Long userId) {
        return userStreakRepository.findByUserId(userId);
    }

    public UserStreak save(UserStreak streak) {
        return userStreakRepository.save(streak);
    }
}
