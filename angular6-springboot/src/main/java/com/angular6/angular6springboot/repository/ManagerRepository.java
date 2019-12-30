package com.angular6.angular6springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angular6.angular6springboot.model.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long> {

}
