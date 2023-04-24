package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UserProblem;
import com.example.demo.services.UserProblemService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GramsevakProblemController {
	
	@Autowired 
	UserProblemService upserv;
	
	@GetMapping("/viewproblems")
	public List<UserProblem> viewProblems()
	{
		return upserv.getAllProblems();
	}
	
	@GetMapping("/approveProblem")
	public int approveProblem(@RequestParam("pid") int pid)
	{
		return upserv.approveProblem(pid);
	}
	
	@GetMapping("/declineProblem")
	public int declineProblem(@RequestParam("pid") int pid)
	{
		return upserv.declineProblem(pid);
	}
	

}
