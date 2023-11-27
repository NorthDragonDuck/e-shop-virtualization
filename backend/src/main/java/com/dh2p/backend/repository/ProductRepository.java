package com.dh2p.backend.repository;

import com.dh2p.backend.model.Product;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepository extends JpaRepository<Product, String> {

    Page<Product> findByCategorySlug(String categorySlug, Pageable pageable);

    Page<Product> findByNameContaining(String name, Pageable pageable);

    Product findBySku(String sku);
}
