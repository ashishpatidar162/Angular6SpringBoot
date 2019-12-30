package com.angular6.angular6springboot.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "managers")
public class Manager {

	private long id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String password;
	private String address;
//	private String dob;
	private String Company;
	
	public Manager() {
		
	}
	
	public Manager(long id, String firstName, String lastName, String emailId, String password, String address, String company) {
		
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.address = address;
//		this.dob = dob;
		this.Company = company;
	}
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "first_name", nullable = false)   
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	@Column(name = "last_name", nullable = false)
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
    @Column(name = "email_address", nullable = false)
	public String getEmailId() {
		return emailId;
	}
    
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
    @Column(name = "address", nullable = false)	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
  
//	@Column(name = "date", nullable = false)
   
//	public String getDate() {
//		return dob;
//	}
	
//	public void setDate(String dob) {
//		this.dob = dob;
//	}
   
	@Column(name = "company", nullable = false)	
	public String getCompany() {
		return Company;
	}
	
	public void setCompany(String company) {
		Company = company;
	}
	
	@Override
	public String toString() {
		return "Manager [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", password=" + password + ", address=" + address + ", Company=" + Company + "]";
	} 
	
 	
	
}
