package com.symbiote.backend.controller;

import com.symbiote.backend.entity.Wallet;
import com.symbiote.backend.service.WalletService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class WalletController {
    private final WalletService walletService;

    @GetMapping("/api/wallet/{userId}")
    public ResponseEntity<Wallet> getWallet(@PathVariable Long userId) {
        Optional<Wallet> wallet = walletService.getByUserId(userId);
        return wallet.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/api/reward/redeem")
    public ResponseEntity<Wallet> redeemReward(@RequestBody RedeemRequest request) {
        Optional<Wallet> walletOpt = walletService.getByUserId(request.getUserId());
        if (walletOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Wallet wallet = walletOpt.get();
        if (wallet.getCoins() < request.getCoinsToRedeem()) {
            return ResponseEntity.badRequest().body(wallet);
        }
        wallet.setCoins(wallet.getCoins() - request.getCoinsToRedeem());
        wallet.setTokens(wallet.getTokens() + request.getTokensToAdd());
        Wallet updated = walletService.save(wallet);
        return ResponseEntity.ok(updated);
    }

    @Data
    public static class RedeemRequest {
        private Long userId;
        private int coinsToRedeem;
        private int tokensToAdd;
    }
}
