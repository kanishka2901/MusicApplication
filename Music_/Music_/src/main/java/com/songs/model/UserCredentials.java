//package com.songs.model;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Document(collection = "UserDetails")
//public class UserCredentials {
//
//  @Id 
//  private String userName;
//
//  private String password;
//
//  boolean enabled;
//
//  @ElementCollection
//  @JoinTable(
//      name = "authorities",
//      joinColumns = {@JoinColumn(name = "username")})
//  @Column(name = "authority")
//  private Set<String> roles;
//}