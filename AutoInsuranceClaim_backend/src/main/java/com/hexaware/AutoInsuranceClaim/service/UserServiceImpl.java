package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.model.User;
import com.hexaware.AutoInsuranceClaim.repository.ClaimRepository;
import com.hexaware.AutoInsuranceClaim.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepo;

    @Autowired
    ClaimRepository claimRepo;

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll() ;
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }


    @Override
    public User createNewUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userRepo.save(user);
    }

//    @Override
//    public User assignClaimToUser(Long claimId, Long userId) {
//        Claim claim = claimRepo.findById(claimId).get();
//        User user = userRepo.findById(userId).get();
//        user.addClaims(claim);
//        return user;
//    }

    @Override
    public void deleteUserById(Long id) {
        userRepo.deleteById(id);
    }
}
