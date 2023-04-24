package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="register_report")
public class Register_report {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	

	
//	@JoinColumn(name = "type",referencedColumnName="type")
//	private User_types type;
	
	
	
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String work_desc;  
	@Column
	private int status;
	
	@Column
	private String link;

	public Register_report() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Register_report(int id, String fname, String lname, String work_desc, int status, String link) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.work_desc = work_desc;
		this.status = status;
		this.link = link;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getWork_desc() {
		return work_desc;
	}

	public void setWork_desc(String work_desc) {
		this.work_desc = work_desc;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	@Override
	public String toString() {
		return "Register_report [id=" + id + ", fname=" + fname + ", lname=" + lname + ", work_desc=" + work_desc
				+ ", status=" + status + ", link=" + link + "]";
	}
	
	
	

	
}
