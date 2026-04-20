package com.symbiote.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardDto {
    private int xp;
    private int coins;
    private int level;
    private int streak;
    private int rank;
    private int pendingTasks;
}
