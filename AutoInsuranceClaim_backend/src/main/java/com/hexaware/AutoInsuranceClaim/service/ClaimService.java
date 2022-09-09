package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;

import java.util.List;
import java.util.Optional;

public interface ClaimService {

    List<Claim> getAllClaims();
    Optional<Claim> getClaimById(Long id);

    Claim createNewClaim(Claim claim);

    Claim updateClaim(Claim claim);

    void deleteClaimById(Long id);

}
