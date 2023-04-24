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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="birthdeath")
public class Birthdeath {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
	
	@Column
	private String bname;
	@Column
	private Date date;
	@Column
	private String hospitalname;
	@Column
	private String bplace;
	
//	@ManyToOne(cascade=CascadeType.MERGE	)
//	@JoinColumn(name = "useridfk",referencedColumnName="user_id")
	@Column
	private int useridfk;
	
	
//	@OneToOne(cascade=CascadeType.MERGE)
//	@JoinColumn(name = "bdtype",referencedColumnName="bdtype")
	private int bdtype;

	public Birthdeath()
	{
		super();
	}

	public Birthdeath(int bid, String bname, Date date, String hospitalname, String bplace, int useridfk,
			int bdtype) {
		super();
		this.bid = bid;
		this.bname = bname;
		this.date = date;
		this.hospitalname = hospitalname;
		this.bplace = bplace;
		this.useridfk = useridfk;
		this.bdtype = bdtype;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getHospitalname() {
		return hospitalname;
	}

	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}

	public String getBplace() {
		return bplace;
	}

	public void setBplace(String bplace) {
		this.bplace = bplace;
	}

	public int getUseridfk() {
		return useridfk;
	}

	public void setUseridfk(int useridfk) {
		this.useridfk = useridfk;
	}

	public int getBdtype() {
		return bdtype;
	}

	public void setBdtype(int bdtype) {
		this.bdtype = bdtype;
	}
	
	

	
	
}
