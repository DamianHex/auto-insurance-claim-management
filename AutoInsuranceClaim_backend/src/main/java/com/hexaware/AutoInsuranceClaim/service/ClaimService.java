package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;

import java.util.List;
import java.util.Optional;

public interface ClaimService {


    List<Claim> getAllClaimsByUserGid(Long gid);

    Claim createNewClaim(Claim claim);

    Claim rejectClaim(Long id, Claim claim);

    void deleteClaimById(Long id);

    // not currently in use but here for possible future version implementation
//    public List<Claim> getAllUnassignedClaimsByUserId(Long id);
//
//    Claim assignUserToClaim(Long claimId, Long userId);
}
