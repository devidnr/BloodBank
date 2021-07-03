package com.example.blood_bank.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="blood")
public class Blood {
   
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    @Column(name = "bloodName", nullable = false)
    private String bloodName ;
    @Column(name = "issues", nullable = false)
private String issues;
    @Id
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "city", nullable = false)
    private String city;
    public String getEmail() {
        return email;
    }
    @Column(name = "gender", nullable = false)
    private String gender;
    @Column(name = "health", nullable = false)
private String health;
    @Column(name = "userName", nullable = false)
    private String userName ;
    @Column(name = "mobile", nullable = false)
private String mobile;
    public String getBloodName() {
        return bloodName;
    }
    public void setBloodName(String bloodName) {
        this.bloodName = bloodName;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getHealth() {
        return health;
    }
    public void setHealth(String health) {
        this.health = health;
    }
    
    public String getIssues() {
        return issues;
    }
    public void setIssues(String issues) {
        this.issues = issues;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    @Override
    public String toString() {
        return "Blood [bloodName=" + bloodName + ", city=" + city + ", email=" + email + ", gender=" + gender
                + ", health=" + health + ", issues=" + issues + ", mobile=" + mobile + ", userName=" + userName + "]";
    }
   
    
    
    
    
}
