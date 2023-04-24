package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Birthdeath;
import com.example.demo.services.BirthdeathService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BirthdeathController {
	
	
	@Autowired
	BirthdeathService birthdeathService;
	
	@PostMapping("/registerrecord")
	public Birthdeath registerUser(@RequestBody Birthdeath u)
	{
		
		return birthdeathService.registerbd(u);
	}

}
