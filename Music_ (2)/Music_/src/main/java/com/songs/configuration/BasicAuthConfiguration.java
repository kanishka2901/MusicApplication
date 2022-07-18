//package com.songs.configuration;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.songs.model.User;
//import com.songs.repository.MusicRepository;
//import com.songs.repository.UserRepository;
//
//@Configuration
//public class BasicAuthConfiguration extends WebSecurityConfigurerAdapter {
//	
//	@Autowired
//	private UserRepository UserRepo;
//	
//	private User user;
//	
//	// Authentication : set user/password details and mention the role.
//	@Override
//	protected void configure(AuthenticationManagerBuilder authenticate) throws Exception {
//		String passwordencodeuser = passwordEncoder().encode(UserRepo.findByPassword(user.getPassword()));
//		String passwordencodeadmin = passwordEncoder().encode("shruti123");
//		authenticate.inMemoryAuthentication().withUser(UserRepo.findByEmail(user.getEmail())).password(passwordencodeuser).roles("USER").and()
//				.withUser("admin").password(passwordencodeadmin).roles("USER", "ADMIN");
//	}
//
//	// Authorization : mention which role can access which URL
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.csrf().disable().headers().frameOptions().disable();
//		http.authorizeRequests().antMatchers("/userLogin").hasRole("USER").antMatchers("/adminLogin").hasRole("ADMIN")
//				.anyRequest().authenticated().and().httpBasic();
//	}
//
//	@Bean
//	PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//}
