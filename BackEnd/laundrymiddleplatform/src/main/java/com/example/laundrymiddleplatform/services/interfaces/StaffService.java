package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.Staff;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface StaffService {
    Staff createStaff(Long userId, Long storeId);

    boolean deleteStaff(Long staffId);

    Optional<Staff> getStaffId(Long staffId);
}
