package com.lti.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Premium;

@Repository
public class EstimateRepositoryImpl implements EstimateRepository {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public void save(Object obj) {
		System.out.println("in save");
		entityManager.merge(obj);
	}
	
	@Override
	public double estimateClaimAmount(Premium premium) {
		return 0.0;
	}
	
}
