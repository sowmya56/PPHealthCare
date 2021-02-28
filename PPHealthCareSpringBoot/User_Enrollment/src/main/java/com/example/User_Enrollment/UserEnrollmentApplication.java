package com.example.User_Enrollment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class UserEnrollmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserEnrollmentApplication.class, args);
	}

}
