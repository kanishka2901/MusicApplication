package com.songs.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.songs.model.User;
import com.songs.repository.MusicRepository;
import com.songs.repository.UserRepository;
import com.songs.service.MyUserPrincipal;
import com.songs.service.UserDetailServiceImpl;

@Configuration
@EnableWebSecurity
public class BasicAuthConfiguration extends WebSecurityConfigurerAdapter {

//	@Autowired
//	private UserRepository UserRepo;
	
//	@Autowired
//    UserDetailServiceImpl userDetailsService ;
//	
//	@Autowired
//    public void configAuthBuilder(AuthenticationManagerBuilder builder) throws Exception {
//        builder.userDetailsService(userDetailsService); 
//    }
//
//	@Bean
//	public UserDetailsService userDetailsService() {
//		return new UserDetailServiceImpl();
//	}
//
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
//	
//	public DaoAuthenticationProvider authenticationProvider() {
//		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//		authProvider.setUserDetailsService(userDetailsService());
//		authProvider.setPasswordEncoder(passwordEncoder());
//		return authProvider;
//	}

	// Authentication : set user/password details and mention the role.
//	@Override
//	protected void configure(AuthenticationManagerBuilder authenticate) throws Exception {
//		String passwordencodeuser = setPasswordEncoder(passwordEncoder());
////				UserRepo.findByPassword(user.getPassword()));
//		String passwordencodeadmin = passwordEncoder().encode("shruti123");
//		authenticate.inMemoryAuthentication().withUser("shruti")
////				UserRepo.findByEmail(user.getEmail()))
//				.password(passwordencodeuser).roles("USER").and().withUser("admin").password(passwordencodeadmin)
//				.roles("USER", "ADMIN");
//	}
	protected void configure(AuthenticationManagerBuilder authenticate) throws Exception {
		String passwordUser = passwordEncoder().encode("musicapp");
		String passwordAdmin = passwordEncoder().encode("shruti123");
		authenticate.inMemoryAuthentication().withUser("costacloud").password(passwordUser).roles("USER").and()
				.withUser("Admin").password(passwordAdmin).roles("USER", "ADMIN");
	}
	// Authorization : mention which role can access which URL
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().headers().frameOptions().disable();
		http.authorizeRequests().antMatchers("/userLogin").hasRole("USER").antMatchers("/adminLogin").hasRole("ADMIN")
				.antMatchers("/userRegister/**").permitAll().anyRequest().authenticated().and().httpBasic();
	}

//	@Bean
//	  public InMemoryUserDetailsManager userDetailsService() {
//	    UserDetails user = User
//	        .withUsername("user")
//	        .password("{noop}password")
//	        .roles("USER")
//	        .build();
//	    return new InMemoryUserDetailsManager(user);
//	
//	}

}