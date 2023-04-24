package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Birthdeath;

@Transactional
@Repository
public interface BirthdeathRepository extends JpaRepository<Birthdeath, Integer> {

}
