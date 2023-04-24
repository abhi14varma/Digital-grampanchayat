package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

@Entity
@Table(name="userproblem")
public class UserProblem {
		
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pid;
	
	@Column
	private String probdesc;
	@Column
	private String area;
	@Column
	private Date date;  
	@Column
	private int status;
	
	
//	@ManyToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name = "useridfk",referencedColumnName="user_id")
	@Column
	private int useridfk;


	public UserProblem() {
		super();
	}


	public UserProblem(int pid, String probdesc, String area, Date date, int status, int useridfk) {
		super();
		this.pid = pid;
		this.probdesc = probdesc;
		this.area = area;
		this.date = date;
		this.status = status;
		this.useridfk = useridfk;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public String getProbdesc() {
		return probdesc;
	}


	public void setProbdesc(String probdesc) {
		this.probdesc = probdesc;
	}


	public String getArea() {
		return area;
	}


	public void setArea(String area) {
		this.area = area;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public int getUseridfk() {
		return useridfk;
	}


	public void setUseridfk(int useridfk) {
		this.useridfk = useridfk;
	}


	
}
