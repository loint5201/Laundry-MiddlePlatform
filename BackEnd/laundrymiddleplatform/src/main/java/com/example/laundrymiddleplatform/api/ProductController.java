package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.entities.Product;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getProductId(@PathVariable Long Id) throws Exception {
        Optional<Product> product = productService.getProductId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get Product Id")
                .data(product)
                .build());

    }
}
