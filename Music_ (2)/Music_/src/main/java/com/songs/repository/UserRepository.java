package com.songs.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.songs.model.User;

public interface UserRepository extends MongoRepository<User, String>{
	
	String findByEmail(String email);
	String findByPassword(String password);
	
}