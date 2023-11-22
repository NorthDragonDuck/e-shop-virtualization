package com.dh2p.backend.dto;

import com.dh2p.backend.model.Address;
import com.dh2p.backend.model.Customer;
import com.dh2p.backend.model.Order;
import com.dh2p.backend.model.OrderItem;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Set;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Builder
public class Purchase {

    @JsonCreator
    public Purchase(@JsonProperty("customer") Customer customer,
                    @JsonProperty("shippingAddress") Address shippingAddress,
                    @JsonProperty("billingAddress") Address billingAddress,
                    @JsonProperty("order") Order order,
                    @JsonProperty("orderItems") Set<OrderItem> orderItems) {
        this.customer = customer;
        this.shippingAddress = shippingAddress;
        this.billingAddress = billingAddress;
        this.order = order;
        this.orderItems = orderItems;
    }
    
    @JsonProperty("customer")
    private Customer customer;

    @JsonProperty("shippingAddress")
    private Address shippingAddress;

    @JsonProperty("billingAddress")
    private Address billingAddress;

    @JsonProperty("order")
    private Order order;

    @JsonProperty("orderItems")
    private Set<OrderItem> orderItems;

}
