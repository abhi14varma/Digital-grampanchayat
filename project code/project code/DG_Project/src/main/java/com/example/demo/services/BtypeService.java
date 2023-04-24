package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Btype;
import com.example.demo.repositories.BtypeRepository;


@Service
public class BtypeService {

	@Autowired
	BtypeRepository brepo;
	
	public List<Btype> getType()
	{
		return brepo.findAll();
	}
}
