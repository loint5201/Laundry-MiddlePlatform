package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.Category;
import com.example.laundrymiddleplatform.repositories.CategoryRepository;
import com.example.laundrymiddleplatform.services.interfaces.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Optional<Category> getCategoryId(Long Id) {
        Optional<Category> categoryId = categoryRepository.findById(Id);
        return categoryId;

    }
}
