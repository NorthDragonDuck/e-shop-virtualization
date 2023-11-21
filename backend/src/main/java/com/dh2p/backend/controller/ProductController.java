package com.dh2p.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.dh2p.backend.model.Product;
import com.dh2p.backend.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if(product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public Page<Product> getAllProducts(@RequestParam("page") int page,
                                        @RequestParam("size") int size) {
        return productService.getAllProducts(page, size);
    }

    @GetMapping("/search/findByCategoryId")
    public Page<Product> findByCategoryId(@RequestParam("id") Long categoryId,
                                            @RequestParam("page") int page,
                                            @RequestParam("size") int size) {
        return productService.findByCategoryId(categoryId, page, size);
    }

    @GetMapping("/search/findByNameContaining")
    public Page<Product> findByNameContaining(@RequestParam("name") String keyword,
                                                @RequestParam("page") int page,
                                                @RequestParam("size") int size) {
        return productService.findByNameContaining(keyword, page, size);
    }
}
