package com.symbiote.backend.service;

import com.symbiote.backend.entity.UserState;
import com.symbiote.backend.repository.UserStateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserStateService {
    private final UserStateRepository userStateRepository;

    public Optional<UserState> getByUserId(Long userId) {
        return userStateRepository.findByUserId(userId);
    }

    public UserState save(UserState userState) {
        return userStateRepository.save(userState);
    }
}
