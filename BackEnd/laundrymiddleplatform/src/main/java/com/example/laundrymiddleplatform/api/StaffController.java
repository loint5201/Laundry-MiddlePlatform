package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.entities.Staff;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.StaffService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/staff")

public class StaffController {
    private final StaffService staffService;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getStaffId(@PathVariable Long Id) throws Exception {
        Optional<Staff> staff = staffService.getStaffId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get Staff Id")
                .data(staff)
                .build());

    }
}
