package com.symbiote.backend.service;

import com.symbiote.backend.entity.Wallet;
import com.symbiote.backend.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WalletService {
    private final WalletRepository walletRepository;

    public Optional<Wallet> getByUserId(Long userId) {
        return walletRepository.findByUserId(userId);
    }

    public Wallet save(Wallet wallet) {
        return walletRepository.save(wallet);
    }
}
