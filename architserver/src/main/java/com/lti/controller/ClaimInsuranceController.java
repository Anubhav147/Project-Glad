package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.lti.entity.Claim;
import com.lti.exception.InsuranceServiceException;
import com.lti.service.ClaimInsuranceService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@Controller
@CrossOrigin
public class ClaimInsuranceController {
	@Autowired
	private ClaimInsuranceService service;
	
	@PostMapping("/addClaimInsurance")
	public Status submitClaimDetails(@RequestBody Claim claim) {
		try {
			service.saveAndUpdateOfClaimInsuranceDetails(claim);
			
			Status status = new Status();
			status.setStatus(StatusType.SUCCESS);
			status.setMessage("Claim Details Are Submitted Successfully.");
			return status;
		}catch(InsuranceServiceException e) {
			Status status = new Status();
			status.setStatus(StatusType.FAILURE);
			status.setMessage(e.getMessage());
			return status;
		}
	}
}
