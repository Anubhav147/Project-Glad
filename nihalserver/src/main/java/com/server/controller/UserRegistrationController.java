package com.server.controller;

import java.time.LocalDate;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.CustomerDto;
import com.server.dto.StatusDto;
import com.server.entity.Customer;
import com.server.entity.Address;
import com.server.entity.User;
import com.server.exception.UserServiceException;
import com.server.service.EmailService;
import com.server.service.UserService;

@RestController
@CrossOrigin
public class UserRegistrationController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private EmailService emailService;
	
	@PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
	public StatusDto register(@RequestBody CustomerDto customerDto) {
		try {
			
			Customer customer = new Customer();
			System.out.println(customerDto.toString());
            //BeanUtils.copyProperties(customerDto, customer);
            //Redundant code, will be place in a helper method
            customer.setName(customerDto.getName());
            customer.setContactNo(customerDto.getContactNo());
            customer.setDateOfBirth(customerDto.getDateOfBirth());
            customer.setEmailId(customerDto.getEmailId());

            Address address = new Address();
            address.setCity(customerDto.getCity());
            address.setPincode(customerDto.getPincode());
            address.setLandMark(customerDto.getLandmark());
            
            customer.setAddress(address);

            User user = new User();
            user.setEmailId(customerDto.getEmailId());
            user.setPassword(customerDto.getPassword());
            user.setCustomer(customer);
            user.setLastPasswordSet(LocalDate.now());
            user.setCreatedOn(LocalDate.now());
            user.setRole("USER");
            
            userService.register(user);
            
			try {
	            SimpleMailMessage registeredMail = new SimpleMailMessage();
	            registeredMail.setFrom("nk.theraja@gmail.com"); // email of sender
	            registeredMail.setTo("niihalrai@gmail.com");
	            registeredMail.setSubject("Registered successfully");
	            registeredMail.setText("Thanks for signing up on General Insurance portal");
				
	            emailService.sendEmail(registeredMail);
	            
			}catch(MailException e){
				throw new UserServiceException("Error occured during sending email!");
			}
            
			StatusDto status = new StatusDto();
			status.setMessage("Registered successfully!");
			status.setStatus(StatusDto.StatusType.SUCCESS);
			return status;

		} catch (UserServiceException e) {
			StatusDto status = new StatusDto();
			status.setMessage(e.getMessage());
			status.setStatus(StatusDto.StatusType.FAILURE);
			return status;
		} catch (DataAccessException e) {
			StatusDto status = new StatusDto();
			status.setMessage(e.getMessage());
			status.setStatus(StatusDto.StatusType.FAILURE);
			return status;
		} catch (Exception e) {
			StatusDto status = new StatusDto();
			status.setMessage(e.getMessage());
			status.setStatus(StatusDto.StatusType.FAILURE);
			return status;
		}

	}

}
