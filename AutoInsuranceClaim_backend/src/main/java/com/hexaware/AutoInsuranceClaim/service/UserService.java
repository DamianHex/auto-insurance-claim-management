package com.hexaware.AutoInsuranceClaim.service;
import com.hexaware.AutoInsuranceClaim.model.User;
import java.util.List;
import java.util.Optional;

public interface UserService {


    User createNewUser(User user);


    //currently not being used but here for possible future iterations
//    void deleteUserById(Long id);
//
//    List<User> getAllUsers();
//
//    Optional<User> getUserById(Long id);
}