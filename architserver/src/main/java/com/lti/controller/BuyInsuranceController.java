package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.lti.entity.Vehicle;
import com.lti.exception.InsuranceServiceException;
import com.lti.service.BuyInsuranceService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@Controller
@CrossOrigin
public class BuyInsuranceController {

	@Autowired
	private BuyInsuranceService service;
	
	@PostMapping("/buyInsurance")
	public Status submissionDetail(@RequestBody Vehicle vehicle) {
		try {
			service.submissionOfBuyInsuranceDetails(vehicle);
			
			Status status = new Status();
			status.setStatus(StatusType.SUCCESS);
			status.setMessage("Details Are Submitted for Verification.");
			return status;
		}
		catch(InsuranceServiceException e) {
			Status status = new Status();
			status.setStatus(StatusType.FAILURE);
			status.setMessage(e.getMessage());
			return status;
		}
	}
}
