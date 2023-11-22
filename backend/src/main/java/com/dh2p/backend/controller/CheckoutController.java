package com.dh2p.backend.controller;

import com.dh2p.backend.dto.Purchase;
import com.dh2p.backend.dto.PurchaseResponse;
import com.dh2p.backend.service.CheckoutService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://vhost1.localhost")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}









