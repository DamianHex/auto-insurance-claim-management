package com.hexaware.AutoInsuranceClaim.controller;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.model.User;
import com.hexaware.AutoInsuranceClaim.service.ClaimService;
import com.hexaware.AutoInsuranceClaim.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")

@RestController
public class Controller {

    @Autowired
    ClaimService claimService;

    @Autowired
    UserService userService;


    //Claims CRUD
    @PostMapping("/claims")
    public Claim saveNewClaim (@RequestBody Claim claim){
        return claimService.createNewClaim(claim);
    }


    @GetMapping("/unassignedClaims/{id}")
    public List<Claim> getAllUnassignedClaimsByUserId(@PathVariable Long id) {
        return claimService.getAllUnassignedClaimsByUserId(id);
    }

    @GetMapping("/claim/{id}")
    public Optional<Claim> getClaimByID(@PathVariable Long id){
        return claimService.getClaimById(id);
    }


    // this will be used to update the status to rejected
    @PutMapping("/claim/{id}")
    public Claim rejectClaim(@PathVariable long id, @RequestBody Claim claim){
        return claimService.updateClaim(id, claim);
    }


    @PutMapping("/claim/{claimId}/user/{userId}")
    public Claim assignUserToClaim(@PathVariable Long claimId, @PathVariable Long userId) {
        return claimService.assignUserToClaim(claimId, userId);
    }




    @DeleteMapping("/claim/{id}")
    public void deleteClaim(@PathVariable Long id){
    claimService.deleteClaimById(id);
    }
    // User CRUD
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createNewUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserByID(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @GetMapping("/claims/user/{id}")
    public List<Claim> getAllClaimsByUserId(@PathVariable Long id){
        return claimService.getAllClaimsByUserId(id);
    }


    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id){
        User user = userService.getUserById(id).get();
        String name = String.valueOf(user.getFirstName());
        String message = "User " + name + "has been deleted.";
        userService.deleteUserById(id);
        return message;
    }
}
