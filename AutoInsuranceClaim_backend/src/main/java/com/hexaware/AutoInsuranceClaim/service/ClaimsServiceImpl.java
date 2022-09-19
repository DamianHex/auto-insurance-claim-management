package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.model.User;
import com.hexaware.AutoInsuranceClaim.repository.ClaimRepository;
import com.hexaware.AutoInsuranceClaim.repository.UserRepository;
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

    @Autowired
    UserRepository userRepo;

    @Override
    public List<Claim> getAllClaims() {
        return claimRepo.findAll();
    }

    public Optional<Claim> getClaimById(Long id) {
        return claimRepo.findById(id);
    }

    @Override
    public List<Claim> getAllClaimsByUserId(Long id) {
        List<Claim> claimList = new ArrayList<>();
       claimList = claimRepo.findAll().stream().filter(claim -> claim.getUser().getUserId() == id).collect(Collectors.toList());
        return claimList;
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
    public Claim assignUserToClaim(Long claimId, Long userId) {
        Claim claim = claimRepo.findById(claimId).get();
        User user = userRepo.findById(userId).get();
        claim.setUser(user);
        return claimRepo.save(claim);
    }

    @Override
    public void deleteClaimById(Long id) {
        claimRepo.deleteById(id);
    }
}
