package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.Product;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface ProductService {
    Product createProduct(String productName, String description, double price, int quantity, Long categoryId);

    Optional<Product> getProductId(Long productId);
}
