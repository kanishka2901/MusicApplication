package com.microservice.music.crud.exception;

public class BusinessException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String timeStamp,errorMessage,message,localisedMessage;
	private int errorCode;
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
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
	public BusinessException(String timeStamp, String errorMessage, String message, String localisedMessage,
			int errorCode) {
		super();
		this.timeStamp = timeStamp;
		this.errorMessage = errorMessage;
		this.message = message;
		this.localisedMessage = localisedMessage;
		this.errorCode = errorCode;
	}
}
