package com.dh2p.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dh2p.backend.model.ProductCategory;
import com.dh2p.backend.service.ProductCategoryService;


@RestController
@RequestMapping("/categories")
public class ProductCategoryRestController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @GetMapping()
    public List<ProductCategory> getAllProductCategories() {
        return productCategoryService.getAllProductCategories();
    }

}
