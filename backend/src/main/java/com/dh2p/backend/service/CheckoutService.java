package com.dh2p.backend.service;

import com.dh2p.backend.dto.Purchase;
import com.dh2p.backend.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
