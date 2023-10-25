package com.example.laundrymiddleplatform.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long orderId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "store_id")
    private Long storeId;

    @Column(name = "staff_id")
    private Long staffId;

    @JsonFormat(pattern = "dd-MM-yyyy", timezone = "GMT+07:00")
    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "price")
    private double price;

    @Column(name = "status")
    private String status;






}
