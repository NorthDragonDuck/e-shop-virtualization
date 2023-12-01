package com.dh2p.backend.service;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import com.dh2p.backend.model.Product;

public interface ProductService {

    Page<Product> getAllProducts(Pageable pageable);

    Page<Product> getProductsByCategory(String category, Pageable pageable);

    public Page<Product> searchProducts(String keyword, Pageable pageable);
}
