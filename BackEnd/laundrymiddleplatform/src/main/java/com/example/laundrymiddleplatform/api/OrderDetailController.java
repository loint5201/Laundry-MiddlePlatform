package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.entities.OrderDetail;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.OrderDetailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/order_detail")
public class OrderDetailController {
    private final OrderDetailService orderDetailService;

    public OrderDetailController(OrderDetailService orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getOrderDetailId(@PathVariable Long Id) throws Exception {
        Optional<OrderDetail> orderDetail = orderDetailService.getOrderDetailId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get OrderDetail Id")
                .data(orderDetail)
                .build());
    }
}
