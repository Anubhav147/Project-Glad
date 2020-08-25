package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Premium;
import com.lti.service.EstimateService;

@RestController
@CrossOrigin
public class EstimateController {
	
	@Autowired
	private EstimateService estimateService;
	
	@PostMapping(path = "/estimate", consumes = "application/json" , produces = "application/json")
	private void estimateClaimAmt(@RequestBody Premium premium) {
		System.out.println("in controller");
		double estimatedAmt = estimateService.estimateClaim(premium);
		System.out.println(estimatedAmt);
	}
}
