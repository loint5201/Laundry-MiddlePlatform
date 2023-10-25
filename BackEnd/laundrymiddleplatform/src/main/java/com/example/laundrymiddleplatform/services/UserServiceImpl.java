package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.User;
import com.example.laundrymiddleplatform.repositories.UserRepository;
import com.example.laundrymiddleplatform.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User register(String username, String email, String password, String lastname, String firstname) {
        User saveUser = userRepository.save(User.builder()
             .username(username)
             .email(email)
             .password(password)
             .lastName(lastname)
             .firstName(firstname)
             .role("user")
             .build());
        return saveUser;
    }
    public User login(String username, String password){
        User loginUser = userRepository.findByUsernameAndPassword(username,password);
        if(loginUser == null){
            return null;
        }else{
            return loginUser;
        }
    }

    @Override
    public Optional<User> getUserId(Long Id) {
        Optional<User> userId = userRepository.findById(Id);
        return userId;
    }

    @Override
    public List<User> userList() {
        List<User> userList = userRepository.findAll();
        return userList;
    }


    @Override
    public boolean deleteProduct(Long productId) {
        userRepository.deleteById(productId);
        return true;
    }










}
