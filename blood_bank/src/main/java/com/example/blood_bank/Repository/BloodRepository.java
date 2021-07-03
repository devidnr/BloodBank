package com.example.blood_bank.Repository;

import com.example.blood_bank.Models.Blood;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BloodRepository extends JpaRepository<Blood,String>{
  Blood findByEmail(String email);
}
