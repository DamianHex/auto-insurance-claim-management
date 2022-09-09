package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClaimsServiceImpl implements ClaimService{

    @Autowired
    ClaimRepository claimRepo;

    @Override
    public List<Claim> getAllClaims() {
        return claimRepo.findAll();
    }

    public Optional<Claim> getClaimById(Long id) {
        return claimRepo.findById(id);
    }

    @Override
    public Claim createNewClaim(Claim claim) {
        return claimRepo.save(claim);
    }

    @Override
    public Claim updateClaim(Claim claim) {
        return claimRepo.save(claim);
    }

    @Override
    public void deleteClaimById(Long id) {
        claimRepo.deleteById(id);
    }
}
