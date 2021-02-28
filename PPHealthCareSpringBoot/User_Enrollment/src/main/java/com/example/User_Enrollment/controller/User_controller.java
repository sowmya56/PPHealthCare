package com.example.User_Enrollment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.User_Enrollment.model.Users;
import com.example.User_Enrollment.service.User_service;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class User_controller {
	
	@Autowired
	User_service user_service;
	
	
	@PostMapping("/register")
	public ResponseEntity<Boolean> RegisterUser(@RequestBody Users data)
	{
		Boolean flag= user_service.RegisterUser(data);
	    return new ResponseEntity<Boolean>(flag,HttpStatus.OK);
		
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<Users>> GetAllFunction()
	{
		List<Users> list=user_service.getAllData();
	     return new ResponseEntity<List<Users>>(list,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> DeleteFunction(@PathVariable Long id)
	{
		Boolean flag=user_service.deleteData(id);
	 return new ResponseEntity<Boolean>(flag,HttpStatus.OK);
	}
	
	@PutMapping("/edit")
	public ResponseEntity<Boolean> UpdateFunction(@RequestBody  Users data)
	{
		System.out.println(data);
		Boolean flag=user_service.editData(data);
	 return new ResponseEntity<Boolean>(flag,HttpStatus.OK);	}
	
	


}
