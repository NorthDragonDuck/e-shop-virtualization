package com.dh2p.backend.repository;

import com.dh2p.backend.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://vhost1.localhost")
public interface CountryRepository extends JpaRepository<Country, Integer> {
}
