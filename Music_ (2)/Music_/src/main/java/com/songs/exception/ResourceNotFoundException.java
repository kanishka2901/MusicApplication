package com.microservice.music.crud.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class ResourceNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String errorMessage,message,localisedMessage;
	private int errorCode;
	public ResourceNotFoundException(String errorMessage, String message, String localisedMessage, int errorCode) {
		super();
		this.errorMessage = errorMessage;
		this.message = message;
		this.localisedMessage = localisedMessage;
		this.errorCode = errorCode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getLocalisedMessage() {
		return localisedMessage;
	}
	public void setLocalisedMessage(String localisedMessage) {
		this.localisedMessage = localisedMessage;
	}
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
