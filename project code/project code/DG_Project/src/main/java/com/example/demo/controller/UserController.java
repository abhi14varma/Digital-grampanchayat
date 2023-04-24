package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.User;
import com.example.demo.entities.UserType;
import com.example.demo.services.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService userservice;
	
	@PostMapping("/register")
	public User registerUser(@RequestBody User u)
	{
		u.setUt(new UserType (1,"villagers"));
		return userservice.register(u);
	}
	
	@PostMapping("/checkLogin")
	public User checkLogin(@RequestBody LoginCheck lcheck)
	{
	return userservice.getLogin(lcheck.getUsername(), lcheck.getPassword());
}
	
}
