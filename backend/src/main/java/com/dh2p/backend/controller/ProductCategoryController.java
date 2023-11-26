package com.dh2p.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dh2p.backend.model.Product;
import com.dh2p.backend.model.ProductCategory;
import com.dh2p.backend.service.ProductCategoryService;
import com.dh2p.backend.service.ProductService;

import java.util.List;


@CrossOrigin("http://vhost1.localhost")
@RestController
@RequestMapping("/api/categories")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService categoryService;

    @Autowired
    private ProductService productService;

    @GetMapping("")
    public List<ProductCategory> getAllCategories() {
        return categoryService.getAllProductCategoryList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductCategory> getCategoryById(@PathVariable Long id) {
        ProductCategory category = categoryService.getProductCategoryById(id);
        if (category != null) {
            return ResponseEntity.ok(category);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/categories/{categoryName}")
    public ResponseEntity<Page<Product>> getProductsByCategoryName(
            @PathVariable String categoryName,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "20") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        ProductCategory category = categoryService.getProductCategoryByName(categoryName);
    
        // Check if the category was found
        if (category == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    
        Page<Product> products = productService.findProductsByCategoryId(category.getId(), pageable);
        if (products == null || products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}

