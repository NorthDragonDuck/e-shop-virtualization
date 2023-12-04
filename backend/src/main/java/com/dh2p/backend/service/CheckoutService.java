package com.dh2p.backend.service;

import com.dh2p.backend.model.Purchase;
import com.dh2p.backend.model.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
