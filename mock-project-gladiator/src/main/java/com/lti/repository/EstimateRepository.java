package com.lti.repository;

import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Premium;

public interface EstimateRepository {

	void save(Object obj);

	double estimateClaimAmount(Premium premium);

}