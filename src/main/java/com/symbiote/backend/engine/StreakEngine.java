package com.symbiote.backend.engine;

import com.symbiote.backend.entity.UserStreak;
import com.symbiote.backend.repository.UserStreakRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class StreakEngine {
    private final UserStreakRepository userStreakRepository;

    public UserStreak updateStreak(Long userId) {
        UserStreak streak = userStreakRepository.findByUserId(userId)
                .orElse(new UserStreak(null, userId, 0, 0, LocalDate.now()));
        LocalDate today = LocalDate.now();
        if (streak.getLastActivityDate() != null && streak.getLastActivityDate().plusDays(1).isEqual(today)) {
            streak.setCurrentStreak(streak.getCurrentStreak() + 1);
        } else if (!today.equals(streak.getLastActivityDate())) {
            streak.setCurrentStreak(1);
        }
        if (streak.getCurrentStreak() > streak.getLongestStreak()) {
            streak.setLongestStreak(streak.getCurrentStreak());
        }
        streak.setLastActivityDate(today);
        return userStreakRepository.save(streak);
    }

    public UserStreak resetIfMissed(Long userId) {
        Optional<UserStreak> opt = userStreakRepository.findByUserId(userId);
        if (opt.isPresent()) {
            UserStreak streak = opt.get();
            LocalDate today = LocalDate.now();
            if (streak.getLastActivityDate() != null && streak.getLastActivityDate().plusDays(1).isBefore(today)) {
                streak.setCurrentStreak(0);
                return userStreakRepository.save(streak);
            }
            return streak;
        }
        return null;
    }

    public Optional<UserStreak> getStatus(Long userId) {
        return userStreakRepository.findByUserId(userId);
    }
}
