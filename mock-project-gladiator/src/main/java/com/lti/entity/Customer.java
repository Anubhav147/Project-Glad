package com.lti.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMER")
public class Customer {
	
	@Id
	@SequenceGenerator(name = "id", initialValue = 1, allocationSize=1)
	@GeneratedValue
	private int id;
	
	@Column(name = "first_name", nullable=false)
	private String firstName;
	
	@Column(name = "last_name", nullable=false)
	private String lastName;
	
	@Column(name = "email", nullable=false, unique = true)
	private String emailId;
	
	@Column(name = "dateOfBirth", nullable=false)
	private LocalDate dateOfBirth;
	
	@Column(name = "contact_no", nullable=false)
	private int contactNo;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="id")
	private Address address;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirst_name(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}