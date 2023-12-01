package com.dh2p.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.dh2p.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
    
    Page<Product> findByCategorySlug(@Param("categorySlug") String categorySlug, Pageable pageable);

    Page<Product> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
