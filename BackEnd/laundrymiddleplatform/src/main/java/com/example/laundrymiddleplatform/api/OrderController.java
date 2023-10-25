package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.entities.Order;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getOrderId(@PathVariable Long Id) throws Exception {
        Optional<Order> order = orderService.getOrderId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get Order Id")
                .data(order)
                .build());
    }
}
