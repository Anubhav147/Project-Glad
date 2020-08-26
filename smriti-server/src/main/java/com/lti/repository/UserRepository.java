package com.lti.repository;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Customer;
import com.lti.entity.User;

public interface UserRepository {

	void save(Customer customer);

	void save(User user);

	Customer findCustomerById(int id);

	List<Customer> findAll();

	boolean isCustomerPresent(String email);

	boolean isUserPresent(String email);

	User findByEmailPassword(String email, String password);

}