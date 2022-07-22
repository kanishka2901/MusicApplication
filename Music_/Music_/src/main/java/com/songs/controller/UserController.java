package com.songs.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.songs.model.User;
import com.songs.repository.UserRepository;
import com.songs.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/userRegister")
	public User register(@RequestBody User user) {
		return userService.register(user);
	}
	
//	private UserRepository userRepository;
//	private PasswordEncoder passwordEncoder;
//
//	@Autowired
//	private UserService userService;
//
//	@PostMapping("/userRegister")
//	@ResponseStatus(code = HttpStatus.CREATED)
//	  public void register(@RequestBody User user) {
//	    User users = User.builder()
//	      .enabled(true)
//	      .username(user.getUserName())
//	      .password(passwordEncoder.encode(user.getPassword()))
//	      .roles(Set.of("USER"))
//	      .build();
//	    userRepository.save(user);
//	}
}