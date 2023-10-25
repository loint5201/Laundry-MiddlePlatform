package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.Category;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface CategoryService {

    Optional<Category> getCategoryId(Long Id);
}
