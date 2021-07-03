package com.example.blood_bank.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mail", nullable = false)
    private String userName;
    @Column(name = "password", nullable = false)
    private String password;
    @Id
    @Column(name = "userName", nullable = false)
    private String mail;
    @Column(name = "blood", nullable = false)
    private String blood;
    @Column(name = "role", nullable = false)
    private String role;
    @Column(name = "mobile", nullable = false)
    private String mobile;
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }
    public String getBlood() {
        return blood;
    }
    public void setBlood(String blood) {
        this.blood = blood;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    @Override
    public String toString() {
        return "User [blood=" + blood + ", mail=" + mail + ", mobile=" + mobile + ", password=" + password + ", role="
                + role + ", userName=" + userName + "]";
    }
    
}
