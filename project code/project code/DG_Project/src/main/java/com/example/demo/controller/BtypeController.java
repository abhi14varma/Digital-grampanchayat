package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Btype;

import com.example.demo.services.BtypeService;

@CrossOrigin(origins = "http://localhost:3000")


@RestController
public class BtypeController {
	

	@Autowired
	BtypeService bservice;
	
	@GetMapping("/getbtype")
	public List<Btype> getAll()
	{
		return bservice.getType();
	}

}
