package com.dh2p.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dh2p.backend.model.ProductCategory;
import com.dh2p.backend.repository.ProductCategoryRepository;
import java.util.List;

@Service
public class ProductCategoryService {
    @Autowired
    private ProductCategoryRepository categoryRepository;

    public List<ProductCategory> getAllProductCategoryList() {
        return categoryRepository.findAll();
    }


    public ProductCategory getProductCategoryByName(String category_name) {
        return categoryRepository.findByCategoryName(category_name);
    }
}
