package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.entity.Premium;
import com.lti.exception.EstimateServiceException;
import com.lti.repository.EstimateRepository;

@Service
public class EstimateServiceImpl implements EstimateService {
	
	@Autowired
	private EstimateRepository estimateRepository;
	
	//@Autowired
	//private Premium newPremium;
	
	@Override
	public double estimateClaim(Premium premium) {
		Premium newPremium = new Premium();
		double estimatedAmount=0.0;
		System.out.println("in service");
		try{
			System.out.println("in service try");
			newPremium.setId(premium.getId());
			newPremium.setAge(premium.getAge());
			newPremium.setAmount(premium.getAmount());
			newPremium.setDepreciationRate(premium.getDepreciationRate());
			newPremium.setModel(premium.getModel());
			newPremium.setType(premium.getType());
			newPremium.setDuration(premium.getDuration());
			newPremium.setLossSuffered(premium.getLossSuffered());
			newPremium.setTotalCostOfVehicle(premium.getTotalCostOfVehicle());
			estimateRepository.save(newPremium);
			//formula = ((loss_suffered*amount)/total_cost_of_vehicle)*age*depreciation_rate;
			estimatedAmount = ((premium.getLossSuffered() * premium.getAmount()) / premium.getTotalCostOfVehicle())
				* premium.getAge() * premium.getDepreciationRate();
	}
		catch(EstimateServiceException e) {
			System.out.println(e.getMessage());
		}
		return estimatedAmount;
	}
}
