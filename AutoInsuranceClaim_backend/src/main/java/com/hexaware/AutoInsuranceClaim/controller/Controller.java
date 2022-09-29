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

    // Service Auto wiring
    @Autowired
    ClaimService claimService;
    @Autowired
    UserService userService;

    //Claims CRUD
    @PostMapping("/claims")
    public Claim saveNewClaim (@RequestBody Claim claim){
        return claimService.createNewClaim(claim);
    }

    @PutMapping("/claim/{id}")
    public Claim rejectClaim(@PathVariable long id, @RequestBody Claim claim){
        return claimService.rejectClaim(id, claim);
    }

    @DeleteMapping("/claim/{id}")
    public void deleteClaim(@PathVariable Long id){
    claimService.deleteClaimById(id);
    }

    @GetMapping("/claims/user/{gid}")
    public List<Claim> getAllClaimsByUserGid(@PathVariable long gid){
        return claimService.getAllClaimsByUserGid(gid);
    }

    // User CRUD
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createNewUser(user);
    }

    // not being used currently but here for future version implementation
//    @GetMapping("/unassignedClaims/{id}")
//    public List<Claim> getAllUnassignedClaimsByUserId(@PathVariable Long id) {
//        return claimService.getAllUnassignedClaimsByUserId(id);
//    }
//
//    @GetMapping("/users")
//    public List<User> getAllUsers(){
//        return userService.getAllUsers();
//    }
//
//    @GetMapping("/user/{id}")
//    public Optional<User> getUserByID(@PathVariable Long id){
//        return userService.getUserById(id);
//    }
//
//    @DeleteMapping("/user/{id}")
//    public String deleteUser(@PathVariable Long id){
//        User user = userService.getUserById(id).get();
//        String name = String.valueOf(user.getFirstName());
//        String message = "User " + name + "has been deleted.";
//        userService.deleteUserById(id);
//        return message;
//    }
//
//    @PutMapping("/claim/{claimId}/user/{userId}")
//    public Claim assignUserToClaim(@PathVariable Long claimId, @PathVariable Long userId) {
//        return claimService.assignUserToClaim(claimId, userId);
//    }
}
