package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Birthdeath;
import com.example.demo.repositories.BirthdeathRepository;


@Service
public class BirthdeathService {
	
	@Autowired
	BirthdeathRepository birthdeathrepo;
	
	public Birthdeath registerbd(@RequestBody Birthdeath bd)
	{
		return birthdeathrepo.save(bd);
	}
	
	

}
