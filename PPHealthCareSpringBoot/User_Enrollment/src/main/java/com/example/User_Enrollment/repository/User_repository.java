package com.example.User_Enrollment.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.User_Enrollment.model.Users;

@Repository
public interface User_repository extends CrudRepository<Users,Long> {


	 
}
