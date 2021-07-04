package com.example.blood_bank.Controllers;

import java.util.List;

import com.example.blood_bank.Models.Blood;
import com.example.blood_bank.Repository.BloodRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/blood")
@CrossOrigin(origins = "http://localhost:4200")

public class BloodController {
    @Autowired
    BloodRepository bloodRepository;
    @GetMapping("/blood")
    public List<Blood> getAllbloods(){
        
        System.out.print(bloodRepository.findAll());
        return bloodRepository.findAll();
    }
}
