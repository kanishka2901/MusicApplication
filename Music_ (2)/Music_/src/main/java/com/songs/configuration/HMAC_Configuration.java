package com.songs.configuration;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.codec.binary.Base64;

public class HMAC_Configuration{

	public static void main(String args[]) throws NoSuchAlgorithmException, InvalidKeyException{
		
		String secret = "admin";
		String message = "message";
		
		Mac sha256= Mac.getInstance("HmacSHA256");
		
//		to get the bites
		SecretKeySpec secretKeySpec = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
		sha256.init(secretKeySpec);
		
//		convert into base64
		String hash = Base64.encodeBase64String(sha256.doFinal(message.getBytes()));
		System.out.println("Hash value : "+ hash);
	}
	
}
