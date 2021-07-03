package com.example.blood_bank.Repository;

import com.example.blood_bank.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
    User findByUserName(String userName);
}
