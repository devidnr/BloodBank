package com.example.blood_bank.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import com.example.blood_bank.Models.Blood;
import com.example.blood_bank.Models.Greeting;
import com.example.blood_bank.Models.User;
import com.example.blood_bank.Repository.BloodRepository;
import com.example.blood_bank.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
    private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name",
     defaultValue = "To bank") String name) {
       
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}
    @Autowired
    UserRepository userRepository;
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
       
    }
    @PostMapping("/user")
    public User creatUser(@RequestBody User user){
        return userRepository.save(user);
    }
     @GetMapping("/users/{userName}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String userName){
        User user=userRepository.findByUserName(userName);
        return ResponseEntity.ok(user);
    }
    @PutMapping("/users/{userName}")
    public ResponseEntity<User> updateUser(@PathVariable String userName,@RequestBody User userDetails){
        User user=userRepository.findByUserName(userName);
        user.setUserName(userDetails.getUserName());
        user.setPassword(userDetails.getPassword());
        user.setMail(userDetails.getMail());
        user.setMobile(userDetails.getMobile());
        user.setBlood(userDetails.getBlood());
        user.setRole(userDetails.getRole());

       User updatedUser=userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    @DeleteMapping("/users/{userName}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable String userName){
        User user=userRepository.findByUserName(userName);
        userRepository.delete(user);
        Map<String,Boolean> response =new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @Autowired
    BloodRepository bloodRepository;
    @GetMapping("/blood")
    public List<Blood> getAllbloods(){
        bloodRepository.deleteRecord();
        return bloodRepository.findAll();
    }
    @PostMapping("/bloods")
    public Blood creatBlood(@RequestBody Blood blood){
        return bloodRepository.save(blood);
    }
    @GetMapping("/bloods/{email}")
    public ResponseEntity<Blood> getBloodByEmail(@PathVariable String email){
        Blood blood=bloodRepository.findByEmail(email);
        return ResponseEntity.ok(blood);
    }
    @PutMapping("/bloods/{email}")
    public ResponseEntity<Blood> updateBlood(@PathVariable String email,
    @RequestBody Blood bloodDetails){
        Blood blood=bloodRepository.findByEmail(email);
        blood.setBloodName(bloodDetails.getBloodName());
        blood.setIssues(bloodDetails.getIssues());
        blood.setEmail(bloodDetails.getEmail());
        blood.setMobile(bloodDetails.getMobile());
        blood.setGender(bloodDetails.getGender());
        blood.setHealth(bloodDetails.getHealth());
        blood.setUserName(bloodDetails.getUserName());
        blood.setCity(bloodDetails.getCity());

       Blood updatedBlood=bloodRepository.save(blood);
        return ResponseEntity.ok(updatedBlood);
    }
    @DeleteMapping("/bloods/{email}")
    public ResponseEntity<Map<String,Boolean>> deleteBlood(@PathVariable String email){
        Blood blood=bloodRepository.findByEmail(email);
       bloodRepository.delete(blood);
        Map<String,Boolean> response =new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
