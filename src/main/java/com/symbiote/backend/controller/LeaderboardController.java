package com.symbiote.backend.controller;

import com.symbiote.backend.dto.LeaderboardEntryDto;
import com.symbiote.backend.service.LeaderboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaderboard")
@RequiredArgsConstructor
public class LeaderboardController {
    private final LeaderboardService leaderboardService;

    @GetMapping
    public List<LeaderboardEntryDto> getLeaderboard() {
        return leaderboardService.getLeaderboard();
    }

    @GetMapping("/top10")
    public List<LeaderboardEntryDto> getTop10() {
        return leaderboardService.getTop10();
    }

    @GetMapping("/role/{role}")
    public List<LeaderboardEntryDto> getByRole(@PathVariable String role) {
        return leaderboardService.getByRole(role);
    }
}
