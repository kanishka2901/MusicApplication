package com.songs.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApplicationExceptionHandler {
    @ResponseStatus(
            value = HttpStatus.NOT_FOUND,
            reason = "Requested Music Not Found")
    @ExceptionHandler(ResourceNotFoundException.class)
    public void handleException(ResourceNotFoundException e) {
    }

//    @ResponseStatus(
//            value = HttpStatus.BAD_REQUEST,
//            reason = "Received Invalid Input Parameters")
//    @ExceptionHandler(InputValidationException.class)
//    public void handleException(InputValidationException e) {
//    }
//
//    @ResponseStatus(
//            value = HttpStatus.GATEWAY_TIMEOUT,
//            reason = "Upstream Service Not Responding, Try Again")
//    @ExceptionHandler(ServiceUnavailableException.class)
//    public void handleException(ServiceUnavailableException e) {
//    }
}
