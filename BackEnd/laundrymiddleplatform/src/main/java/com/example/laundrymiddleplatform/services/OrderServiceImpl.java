package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.Order;
import com.example.laundrymiddleplatform.repositories.OrderRepository;
import com.example.laundrymiddleplatform.services.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class OrderServiceImpl implements OrderService {

    @Autowired
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    @Override
    public List<Order> orderList() {
        List<Order> orderList = orderRepository.findAll();
        return orderList;
    }

    @Override
    public Optional<Order> getOrderId(Long Id) {
        Optional<Order> orderId = orderRepository.findById(Id);
        return orderId;

    }


    @Override
    public Order createOrder(Long userId, Long storeId, Long staffId) {
        Order saveOrder = orderRepository.save(Order.builder()
                .userId(userId)
                .storeId(storeId)
                .staffId(staffId)
                .build());
        return saveOrder;
    }


}
