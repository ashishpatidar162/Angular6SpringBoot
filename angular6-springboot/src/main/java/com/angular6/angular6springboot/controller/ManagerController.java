package com.angular6.angular6springboot.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.angular6.angular6springboot.model.Manager;
import com.angular6.angular6springboot.repository.ManagerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ManagerController {

	@Autowired
	private ManagerRepository managerRepository;

	@PostMapping("/managers")
	public Manager createManager(@Valid @RequestBody Manager manager) {
		return managerRepository.save(manager);
	}
	
	@GetMapping("/managers")
	public List<Manager> getAllManagers() {
		return managerRepository.findAll();
	}
}
