package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.Product;
import com.example.laundrymiddleplatform.repositories.ProductRepository;
import com.example.laundrymiddleplatform.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(String productName, String description, double price, int quantity, Long categoryId) {
        Product saveProduct = productRepository.save(Product.builder()
                .productName(productName)
                .description(description)
                .price(price)
                .quantity(quantity)
                .categoryId(categoryId)
                .build());
        return saveProduct;
    }

    @Override
    public Optional<Product> getProductId(Long Id) {
        Optional<Product> productId = productRepository.findById(Id);
        return productId;
    }
}
