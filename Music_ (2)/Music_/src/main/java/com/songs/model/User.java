package com.songs.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserDetails")
public class User {
	private String userName;
	private String email;
	private String password;

	public User() {
		super();
	}
	public User(String userName, String email, String password) {
		super();
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}