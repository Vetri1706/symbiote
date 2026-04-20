package com.symbiote.backend.service;

import com.symbiote.backend.dto.DashboardDto;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    // In production, fetch real data from DB/services
    public DashboardDto getDashboard() {
        return new DashboardDto(1200, 350, 5, 8, 3, 4);
    }
}
