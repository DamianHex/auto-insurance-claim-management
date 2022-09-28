package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;

import java.util.List;
import java.util.Optional;

public interface ClaimService {

    List<Claim> getAllClaims();

    List<Claim> getUnassignedClaims();

    public List<Claim> getAllUnassignedClaimsByUserId(Long id);
    Optional<Claim> getClaimById(Long id);

    List<Claim> getAllClaimsByUserId(Long id);

    Claim createNewClaim(Claim claim);

    Claim updateClaim(Claim claim, Long id);

    Claim assignUserToClaim(Long claimId, Long userId);

    void deleteClaimById(Long id);

}
