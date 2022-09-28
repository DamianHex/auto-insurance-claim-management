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

    @Override
    public List<Claim> getUnassignedClaims() {
       return claimRepo.findAll().stream().filter(c -> c.getStatus().equals("unassigned")).collect(Collectors.toList());
    }

    @Override
    public Optional<Claim> getClaimById(Long id) {
        return Optional.empty();
    }

    public Optional<Claim> getUseClaimById(Long id) {
        return claimRepo.findById(id);
    }

    @Override
    public List<Claim> getAllClaimsByUserId(Long id) {
        List<Claim> claimList = new ArrayList<>();
       claimList = claimRepo.findAll().stream().filter(claim -> claim.getGid() == id).collect(Collectors.toList());
        return claimList;
    }

    @Override
    public List<Claim> getAllUnassignedClaimsByUserId(Long id) {
        List<Claim> claimList = new ArrayList<>();
        claimList = claimRepo.findAll().stream().filter(claim -> claim.getGid() == id).filter(c -> c.getStatus().equals("unassigned")).collect(Collectors.toList());
        return claimList;
    }

    @Override
    public Claim createNewClaim(Claim claim) {
        return claimRepo.save(claim);
    }

    @Override
    public Claim updateClaim(Claim claim, Long id) {

        Claim claim1 = claimRepo.findById(id).get();
        claim1.setClaimId(id);
        claim1.setUser(claim.getUser());
        claim1.setStatus(claim.getStatus());
        claim1.setCreationDate(claim.getCreationDate());
        claim1.setDescription(claim.getDescription());
        claim1.setVehicleMake(claim.getVehicleMake());
        claim1.setVehicleModel(claim.getVehicleModel());
        claim1.setVehicleYear(claim.getVehicleYear());
        return claimRepo.save(claim1);
    }

    @Override
    public Claim assignUserToClaim(Long claimId, Long userId) {
        Claim claim = claimRepo.findById(claimId).get();
        User user = userRepo.findById(userId).get();
        claim.setUser(user);
        claim.setStatus("In Progress");
        return claimRepo.save(claim);
    }

    @Override
    public void deleteClaimById(Long id) {
        claimRepo.deleteById(id);
    }
}
