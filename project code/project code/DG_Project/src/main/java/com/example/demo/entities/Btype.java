package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "btype")
public class Btype {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bdtype;
	@Column
	private String btypecat;
	
//	@OneToMany(cascade=CascadeType.MERGE	)
//	@JoinColumn(name = "bdtype",referencedColumnName="bdtype")
//	private UserType ut;
	
	
	public Btype() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Btype(int bdtype, String btypecat) {
		super();
		this.bdtype = bdtype;
		this.btypecat = btypecat;
	}
	@Override
	public String toString() {
		return "Btype [bdtype=" + bdtype + ", btypecat=" + btypecat + "]";
	}
	public int getBdtype() {
		return bdtype;
	}
	public void setBdtype(int bdtype) {
		this.bdtype = bdtype;
	}
	public String getBtypecat() {
		return btypecat;
	}
	public void setBtypecat(String btypecat) {
		this.btypecat = btypecat;
	}
	
	
}
