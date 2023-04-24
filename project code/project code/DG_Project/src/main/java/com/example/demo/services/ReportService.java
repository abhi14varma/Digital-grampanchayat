package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Register_report;
import com.example.demo.entities.Schemes;
import com.example.demo.entities.User;
import com.example.demo.entities.UserProblem;
import com.example.demo.repositories.ReportRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class ReportService {

	@Autowired
	ReportRepository reportrepo;
	

	
	public Register_report registerReport(@RequestBody Register_report r)
	{
		return reportrepo.save(r);
	}
	
	public List<Register_report> getreport()
	{
		return reportrepo.findAll();
	}
	
	public List<Register_report> getAllReports()
	{
		return reportrepo.findAll();
	}
	
	public int approveReport(int rid)
	{
		return reportrepo.approveReport(rid);
	}
	
	public int declineReport(int rid)
	{
		return reportrepo.declineReport(rid);
	}
}
