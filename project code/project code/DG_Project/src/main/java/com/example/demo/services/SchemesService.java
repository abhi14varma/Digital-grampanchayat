package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.entities.Schemes;
import com.example.demo.entities.User;
import com.example.demo.repositories.SchemesRepository;


@Service
public class SchemesService {

	@Autowired
	SchemesRepository servrepo;
	
	public Schemes uploadscheme(@RequestBody Schemes s)
	{
		return servrepo.save(s);
	}
	
	public List<Schemes> getSchemes()
	{
		return servrepo.findAll();
	}
	
	public void deleteBysid(int sid)
	{
		servrepo.deleteById(sid);
	}
}
