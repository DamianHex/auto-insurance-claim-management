package com.hexaware.AutoInsuranceClaim.service;

import com.hexaware.AutoInsuranceClaim.model.Claim;
import com.hexaware.AutoInsuranceClaim.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {


    List<User> getAllUsers();
    Optional<User> getUserById(Long id);

    User createNewUser(User user);

    User updateUser(User user);

//    User assignClaimToUser(Long claimId, Long userId);

    void deleteUserById(Long id);
}
