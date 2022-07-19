package com.microservice.music.crud.exception;

public class ErrorDetails {
	private String timeStamp,errorMessage,message,localisedMessage,details;
	private int errorCode;
	public ErrorDetails(String timeStamp, String errorMessage, String message, String localisedMessage, String details,
			int errorCode) {
		super();
		this.timeStamp = timeStamp;
		this.errorMessage = errorMessage;
		this.message = message;
		this.localisedMessage = localisedMessage;
		this.details = details;
		this.errorCode = errorCode;
	}
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
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
}
