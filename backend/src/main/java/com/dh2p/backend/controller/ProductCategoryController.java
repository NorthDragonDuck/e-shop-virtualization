package com.dh2p.backend.controller;

import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dh2p.backend.model.ProductCategory;
import com.dh2p.backend.service.ProductCategoryService;

import ch.qos.logback.classic.Logger;

import java.util.List;

@CrossOrigin("http://vhost1.localhost")
@RestController
@RequestMapping("/api/category")
public class ProductCategoryController {

    private final Logger logger = (Logger) LoggerFactory.getLogger(ProductCategoryController.class);

    private ProductCategoryService categoryService;

    @GetMapping("")
    public List<ProductCategory> getAllCategories() {
        logger.info("getAllCategories() called");
        List<ProductCategory> categories = categoryService.getAllProductCategories();

        for (ProductCategory category : categories) {
            logger.info(category.toString());
        }

        return categories;


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

    // @GetMapping("/{categoryName}")
    // public ResponseEntity<ProductCategory> getCategoryByName(@PathVariable String categoryName) {
    //     ProductCategory category = categoryService.getProductCategoryByName(categoryName);
    //     if (category != null) {
    //         return ResponseEntity.ok(category);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }
}

