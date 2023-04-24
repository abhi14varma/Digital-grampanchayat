package com.example.demo.services;
import com.example.demo.entities.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.UserTypeRepository;


@Service
public class UserTypeService {

	@Autowired
	UserTypeRepository userrepo;
	
	public List<UserType> getCategory()
	{
		return userrepo.findAll();
	}
}
