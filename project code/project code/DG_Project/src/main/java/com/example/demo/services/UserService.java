package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Register_report;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userrepo;
	
	public User register(@RequestBody User u)
	{
		return userrepo.save(u);
	}
	

	
	public User getLogin(String username,String password)
	{
		User r;
		Optional<User> a1=userrepo.getLogin(username, password);
		try
		{
			r=a1.get();
		}
		catch(Exception e)
		{
			r=null;
			
		}
		return r;
	}
}
