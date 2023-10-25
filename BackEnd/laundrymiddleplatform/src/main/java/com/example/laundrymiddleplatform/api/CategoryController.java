package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.entities.Category;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getCategoryId(@PathVariable Long Id) throws Exception {
        Optional<Category> category = categoryService.getCategoryId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get Category Id")
                .data(category)
                .build());
    }

}
