package com.hexaware.AutoInsuranceClaim.service;
import com.hexaware.AutoInsuranceClaim.model.User;
import com.hexaware.AutoInsuranceClaim.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepo;

    @Override
    public User createNewUser(User user) {
        return userRepo.save(user);
    }


    // Not being used but here for possible future version implementation
//    @Override
//    public List<User> getAllUsers() {
//        return userRepo.findAll() ;
//    }
//
//    @Override
//    public void deleteUserById(Long id) {
//        userRepo.deleteById(id);
//    }
//
//    @Override
//    public Optional<User> getUserById(Long id) {
//        return userRepo.findById(id);
//    }
}
