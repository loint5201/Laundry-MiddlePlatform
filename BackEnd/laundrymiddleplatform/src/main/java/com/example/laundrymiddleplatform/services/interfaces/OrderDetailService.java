package com.example.laundrymiddleplatform.services.interfaces;

import com.example.laundrymiddleplatform.entities.OrderDetail;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface OrderDetailService {
    OrderDetail createOrderDetail(Long orderId, Long productId, int quantity, double price);
    List<OrderDetail> orderDetailList();

    Optional<OrderDetail> getOrderDetailId(Long Id);
}
