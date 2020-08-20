package com.lti.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name = "VEHICLE")
public class Vehicle {
	
	
	@Id
	@SequenceGenerator(name = "id", initialValue = 1, allocationSize=1)
	@GeneratedValue
	private int id;
	
	@Column(name = "type", nullable=false)
	private String type;
	
	@Column(name = "model", nullable=false)
	private String model;
	
	@Column(name = "manufacturer", nullable=false)
	private String manufacturer;
	
	@Column(name = "drivingLicense", nullable=false)
	private String drivingLicense;
	
	@Column(name = "purchaseDate", nullable=false)
	private LocalDate purchaseDate;
	
	@Column(name = "registrationNo", nullable=false)
	private String registrationNo;
	
	@Column(name = "engineNo", nullable=false)
	private String engineNo;
	
	@Column(name = "chassisNo", nullable=false)
	private String chassisNo;
	
	@Column(name = "engineType", nullable=false)
	private String engineType;
	//private int customerNo;  --fk
	
	@ManyToOne()
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getDrivingLicense() {
		return drivingLicense;
	}
	public void setDrivingLicense(String drivingLicense) {
		this.drivingLicense = drivingLicense;
	}
	public LocalDate getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(LocalDate purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public String getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(String registrationNo) {
		this.registrationNo = registrationNo;
	}
	public String getEngineNo() {
		return engineNo;
	}
	public void setEngineNo(String engineNo) {
		this.engineNo = engineNo;
	}
	public String getChassisNo() {
		return chassisNo;
	}
	public void setChassisNo(String chassisNo) {
		this.chassisNo = chassisNo;
	}
	public String getEngineType() {
		return engineType;
	}
	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}
}
