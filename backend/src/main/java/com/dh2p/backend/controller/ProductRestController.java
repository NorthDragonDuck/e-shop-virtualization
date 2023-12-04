package com.dh2p.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dh2p.backend.model.Product;
import com.dh2p.backend.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductRestController {
    
    @Autowired
    private ProductService productService;

    @GetMapping()
    public Page<Product> getAllProducts(Pageable pageable) {
        return productService.getAllProducts(pageable);
    }

    @GetMapping("/by-category/{categorySlug}")
    public Page<Product> getProductsByCategory(@PathVariable("categorySlug") String categorySlug, Pageable pageable) {
        return productService.getProductsByCategory(categorySlug, pageable);
    }

    @GetMapping("/search/{keyword}")
    public Page<Product> searchProducts(@PathVariable("keyword") String keyword, Pageable pageable) {
        return productService.searchProducts(keyword, pageable);
    }
}
