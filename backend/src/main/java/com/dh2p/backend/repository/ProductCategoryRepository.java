package com.dh2p.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dh2p.backend.model.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    
    ProductCategory findByCategoryName(String category_name);
}
