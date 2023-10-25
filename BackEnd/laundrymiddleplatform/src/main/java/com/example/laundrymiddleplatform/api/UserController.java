package com.example.laundrymiddleplatform.api;
import com.example.laundrymiddleplatform.dto.CreateUser;
import com.example.laundrymiddleplatform.entities.User;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createStore(@RequestBody CreateUser createUser) throws Exception {
        User user = userService.register(createUser.getUsername(), createUser.getEmail(), createUser.getPassword(), createUser.getLastName(), createUser.getFirstName());
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("List system cv deleted!")
                .data(user)
                .build());
    }
    @GetMapping("/alluser")
    public ResponseEntity<ApiResponse> getAllUser() throws Exception {
        List<User> userList = userService.userList();
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get All User")
                .data(userList)
                .build());
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getUserId(@PathVariable Long Id) throws Exception {
        Optional<User> user = userService.getUserId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get User ID")
                .data(user)
                .build());
    }




}
