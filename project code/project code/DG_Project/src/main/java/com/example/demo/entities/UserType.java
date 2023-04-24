package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_types")
public class UserType {
	
	
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int type;
		@Column
		private String user_type;
		
		public UserType() {
			super();
			
			// TODO Auto-generated constructor stub
		}
		
		public UserType(int type, String user_type) {
			super();
			this.type = type;
			this.user_type = user_type;
		}

		public int getType() {
			return type;
		}

		public void setType(int type) {
			this.type = type;
		}

		public String getUser_type() {
			return user_type;
		}

		public void setUser_type(String user_type) {
			this.user_type = user_type;
		}
		
		
		
		

}
