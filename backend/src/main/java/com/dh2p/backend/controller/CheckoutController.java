package com.dh2p.backend.controller;

import com.dh2p.backend.model.Purchase;
import com.dh2p.backend.model.PurchaseResponse;
import com.dh2p.backend.service.CheckoutService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://vhost1.localhost")
@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}


