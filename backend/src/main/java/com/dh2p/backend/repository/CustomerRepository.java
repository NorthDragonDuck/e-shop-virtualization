package com.dh2p.backend.repository;

import com.dh2p.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://vhost1.localhost")
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
