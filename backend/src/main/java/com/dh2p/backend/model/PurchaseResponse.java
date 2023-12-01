package com.dh2p.backend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class PurchaseResponse {

    private final String orderTrackingNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PurchaseResponse)) return false;
        PurchaseResponse that = (PurchaseResponse) o;
        return orderTrackingNumber != null && orderTrackingNumber.equals(that.getOrderTrackingNumber());
    }

    @Override
    public int hashCode() {
        return orderTrackingNumber != null ? orderTrackingNumber.hashCode() : 0;
    }
}
