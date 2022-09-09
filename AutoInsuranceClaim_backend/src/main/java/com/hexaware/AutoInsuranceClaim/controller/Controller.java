package com.hexaware.AutoInsuranceClaim.controller;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api")

@RestController
public class Controller {

    @Autowired
    ClaimService claimService;

    @GetMapping("/")
    String homePage(){
        return "Hello World!";
    }

    @PostMapping("/claims")
    public Claim saveNewClaim (@RequestBody Claim claim){
        return claimService.createNewClaim(claim);
    }

    @GetMapping("/claims")
    public List<Claim> getAllClaims(){
        return claimService.getAllClaims();
    }

    @GetMapping("/claim/{id}")
    public Optional<Claim> getClaimByID(@PathVariable Long id){
        return claimService.getClaimById(id);
    }
    // this will be used to update the status to rejected
    @PutMapping("/claim")
    public Claim updateClaim(@RequestBody Claim claim){
        return claimService.updateClaim(claim);
    }

    @DeleteMapping("/claim/{id}")
    public String deleteClaim(@PathVariable Long id){
        Claim claim = claimService.getClaimById(id).get();
        String name = String.valueOf(claim.getUser());
        String message = "The claim for " + name + " has been deleted.";
        claimService.deleteClaimById(id);
        return message;
    }
}
