package com.example.laundrymiddleplatform.services;

import com.example.laundrymiddleplatform.entities.OrderDetail;
import com.example.laundrymiddleplatform.repositories.OrderDetailRepository;
import com.example.laundrymiddleplatform.services.interfaces.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component

public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    private final OrderDetailRepository orderDetailRepository;

    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }

    @Override
    public OrderDetail createOrderDetail(Long orderId, Long productId, int quantity, double price) {
        OrderDetail saveOrderDetail = orderDetailRepository.save(OrderDetail.builder()
                .orderId(orderId)
                .productId(productId)
                .quantity(quantity)
                .price(price)
                .build());
        return saveOrderDetail;
    }

    @Override
    public List<OrderDetail> orderDetailList() {
        List<OrderDetail> orderDetailList = orderDetailRepository.findAll();
        return orderDetailList;
    }

    @Override
    public Optional<OrderDetail> getOrderDetailId(Long Id) {
        Optional<OrderDetail> orderDetailId = orderDetailRepository.findById(Id);
        return orderDetailId;
    }
}
