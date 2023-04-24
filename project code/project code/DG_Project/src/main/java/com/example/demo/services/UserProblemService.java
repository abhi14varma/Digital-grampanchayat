package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.UserProblem;
import com.example.demo.repositories.UserProblemRepository;

@Service
public class UserProblemService {

	@Autowired
	UserProblemRepository userprob;
	
	public UserProblem problemreg(@RequestBody UserProblem u)
	{
		return userprob.save(u) ;
	}
	
	public List<UserProblem> getProblem(int id)
	{
		return userprob.findAll(id);
	}
	
	public List<UserProblem> getAllProblems()
	{
		return userprob.findAll();
	}
	
	public void deleteProblem(int id)
	{
		 userprob.deletePrnbById(id);
	}
	
	public int approveProblem(int p_id)
	{
		return userprob.approveProblem(p_id);
	}
	
	public int declineProblem(int p_id)
	{
		return userprob.declineProblem(p_id);
	}
	
	public void deleteBypid(int pid)
	{
		userprob.deleteById(pid);
	}
	
}
