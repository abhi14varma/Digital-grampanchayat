package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="schemes")
public class Schemes {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid ;
	
	@Column
	private String sname ;
	@Column
	private String description;
	@Column
	private String link ;  
	@Column
	private Date startdate;
	@Column
	private Date enddate;
	public Schemes() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Schemes(int sid, String sname, String description, String link, Date startdate, Date enddate) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.description = description;
		this.link = link;
		this.startdate = startdate;
		this.enddate = enddate;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}
	public Date getEnddate() {
		return enddate;
	}
	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}
	@Override
	public String toString() {
		return "Schemes [sid=" + sid + ", sname=" + sname + ", description=" + description + ", link=" + link
				+ ", startdate=" + startdate + ", enddate=" + enddate + "]";
	}
	
	
}


