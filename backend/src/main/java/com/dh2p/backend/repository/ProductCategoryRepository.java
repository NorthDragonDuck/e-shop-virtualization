package com.dh2p.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.dh2p.backend.model.ProductCategory;

@RepositoryRestResource(collectionResourceRel = "categories", path = "categories")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, String> {

    
    
    ProductCategory findByCategoryName(String category_name);
}
