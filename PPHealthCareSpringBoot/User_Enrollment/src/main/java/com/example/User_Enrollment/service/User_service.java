package com.example.User_Enrollment.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.User_Enrollment.model.Users;
import com.example.User_Enrollment.repository.User_repository;

@Service
public class User_service {

	@Autowired
	User_repository repository;
	
	public Boolean RegisterUser(Users data) {
		
		SimpleDateFormat sdf= new SimpleDateFormat("dd/MM/yyyy");
		try {
			
			data.setBirth_date(sdf.parse(sdf.format(data.getBirth_date())));
			System.out.println(sdf.format(data.getBirth_date()));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		repository.save(data);
		return true;
	}

	public List<Users> getAllData() {
		
		return (List<Users>) repository.findAll();
	}

	public Boolean deleteData(Long id) {
		repository.deleteById(id);
		return true;
	}

	public Boolean editData(Users data) {
		repository.save(data);
		return true;
	}

}
