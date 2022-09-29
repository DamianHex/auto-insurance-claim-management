package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClaimsServiceImpl implements ClaimService{

    @Autowired
    ClaimRepository claimRepo;

    public Optional<Claim> getUseClaimById(Long id) {
        return claimRepo.findById(id);
    }

    @Override
    public List<Claim> getAllClaimsByUserGid(Long id) {
        List<Claim> claimList = new ArrayList<>();
       claimList = claimRepo.findAll().stream().filter(claim -> claim.getGid() == id).collect(Collectors.toList());
        return claimList;
    }

    @Override
    public Claim createNewClaim(Claim claim) {
        return claimRepo.save(claim);
    }

    @Override
    public Claim rejectClaim(Long id, Claim claim) {
        Claim claim1 = claimRepo.findById(id).get();
        claim1.setLastModifiedDate(claim.getLastModifiedDate());
        claim1.setStatus("Rejected");
        return claimRepo.save(claim1);
    }

    @Override
    public void deleteClaimById(Long id) {
        claimRepo.deleteById(id);
    }




    // Not being used but here for possible future version implementation
//    @Override
//    public List<Claim> getAllUnassignedClaimsByUserId(Long id) {
//        List<Claim> claimList = new ArrayList<>();
//        claimList = claimRepo.findAll().stream().filter(claim -> claim.getGid() == id).filter(c -> c.getStatus().equals("unassigned")).collect(Collectors.toList());
//        return claimList;
//    }
//
//    @Override
//    public Claim assignUserToClaim(Long claimId, Long userId) {
//        Claim claim = claimRepo.findById(claimId).get();
//        User user = userRepo.findById(userId).get();
//        claim.setStatus("In Progress");
//        return claimRepo.save(claim);
//    }
}
