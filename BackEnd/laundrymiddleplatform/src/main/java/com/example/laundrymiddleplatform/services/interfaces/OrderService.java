package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.Order;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface OrderService {
    Order createOrder(Long userId, Long storeId, Long staffId);
    List<Order> orderList();

    Optional<Order> getOrderId(Long Id);
}
