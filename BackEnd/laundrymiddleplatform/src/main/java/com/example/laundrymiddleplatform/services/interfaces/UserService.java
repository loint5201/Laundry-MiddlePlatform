package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User register(String username, String email, String password, String lastname, String firstname);
    User login(String username, String password);

    Optional<User> getUserId(Long userId);
    List<User> userList();

    boolean deleteProduct(Long productId);
}
