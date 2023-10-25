package com.example.laundrymiddleplatform.api;

import com.example.laundrymiddleplatform.dto.CreateStore;
import com.example.laundrymiddleplatform.entities.Store;
import com.example.laundrymiddleplatform.response.ApiResponse;
import com.example.laundrymiddleplatform.services.interfaces.StoreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/store")
public class StoreController {
    private final StoreService storeService;

    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createStore(@RequestBody CreateStore createStore) throws Exception {
        Store store = storeService.createStore(createStore.getStoreName(), createStore.getLocation(), createStore.getOwnerId());
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Create Store!")
                .data(store)
                .build());
    }
    @GetMapping("/{Id}")
    public ResponseEntity<ApiResponse> getStoreId(@PathVariable Long Id) throws Exception {
        Optional<Store> store = storeService.getStoreId(Id);
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Get Store ID")
                .data(store)
                .build());
    }
}
