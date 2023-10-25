package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.Staff;
import com.example.laundrymiddleplatform.repositories.StaffRepository;
import com.example.laundrymiddleplatform.services.interfaces.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class StaffServiceImpl implements StaffService {
    @Autowired
    private final StaffRepository staffRepository;

    public StaffServiceImpl(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    @Override
    public Staff createStaff(Long userId, Long storeId) {
        Staff saveStaff = staffRepository.save(Staff.builder()
                .userId(userId)
                .storeId(storeId)
                .build());
        return saveStaff;
    }

    @Override
    public boolean deleteStaff(Long staffId) {
        staffRepository.deleteById(staffId);
        return true;
    }

    @Override
    public Optional<Staff> getStaffId(Long Id) {
        Optional<Staff> staffId = staffRepository.findById(Id);
        return staffId;
    }
}
