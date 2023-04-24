package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="user")
public class User {

	//user_id,
      // type(pk), username, first_name, last_name, email,
    //address, contact_no, password, aadharcard_no
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	
	@OneToOne(cascade=CascadeType.MERGE	)
	@JoinColumn(name = "type",referencedColumnName="type")
	private UserType ut;
	
//	@JoinColumn(name = "type",referencedColumnName="type")
//	private User_types type;
	
	@Column
	private String username;
	@Column
	private String first_name;
	@Column
	private String last_name;  
	@Column
	private String email;
	@Column
	private String address;
	@Column
	private String contact_no ;
	@Column
	private String password ;
	@Column
	private String aadharcard_no ;
	public User() {
		super();
	}
	public User(int user_id, UserType ut, String username, String first_name, String last_name, String email,
			String address, String contact_no, String password, String aadharcard_no) {
		super();
		this.user_id = user_id;
		this.ut = ut ;
		this.username = username;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.address = address;
		this.contact_no = contact_no;
		this.password = password;
		this.aadharcard_no = aadharcard_no;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public UserType getUt() {
		return ut;
	}
	public void setUt(UserType ut) {
		this.ut = ut;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAadharcard_no() {
		return aadharcard_no;
	}
	public void setAadharcard_no(String aadharcard_no) {
		this.aadharcard_no = aadharcard_no;
	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", ut=" + ut + ", username=" + username + ", first_name=" + first_name
				+ ", last_name=" + last_name + ", email=" + email + ", address=" + address + ", contact_no="
				+ contact_no + ", password=" + password + ", aadharcard_no=" + aadharcard_no + "]";
	}
	
	
	
}
