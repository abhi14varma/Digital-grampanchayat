package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.Register_report;
import com.example.demo.entities.Schemes;
import com.example.demo.entities.User;
import com.example.demo.entities.UserType;
import com.example.demo.services.ReportService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GramsevakRegisterReport {
	@Autowired
	ReportService reportservice;
	
	@PostMapping("/Report_Register")
	public Register_report registerReport(@RequestBody Register_report r)
	{
		//r.setUt(new UserType (2,"Gramsevak"));
		
		return reportservice.registerReport(r);
	}
	
	@GetMapping("/getreport")
	public List<Register_report> getAll()
	{
		return reportservice.getreport();
	}
	
	

}
