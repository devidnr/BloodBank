package com.example.blood_bank.Controllers;

public class AuthenticationBean {

	private String message;

	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		System.out.print("i am bean");
		return String.format("HelloWorldBean [message=%s]", message);
	}

}
