package com.lti.repository;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Claim;

public interface ClaimInsuranceRepository {

	void submitAndUpdatingOfClaimInsurance(Claim claim);

	Claim fetchDataByIdForClaimInsurance(int id);

	List<Claim> fetchAllClaimData();

}