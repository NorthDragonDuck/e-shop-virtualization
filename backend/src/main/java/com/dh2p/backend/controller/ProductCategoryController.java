package com.dh2p.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dh2p.backend.model.ProductCategory;
import com.dh2p.backend.service.ProductCategoryService;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/category")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService categoryService;

    @GetMapping
    public List<ProductCategory> getAllCategories() {
        return categoryService.getAllProductCategories();
    }

    @GetMapping("/{categoryName}")
    public ResponseEntity<ProductCategory> getCategoryByName(@PathVariable String categoryName) {
        ProductCategory category = categoryService.getProductCategoryByName(categoryName);
        if (category != null) {
            return ResponseEntity.ok(category);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

