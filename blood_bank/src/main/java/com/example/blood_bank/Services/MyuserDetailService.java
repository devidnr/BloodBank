package com.example.blood_bank.Services;

import com.example.blood_bank.Models.User;
import com.example.blood_bank.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class MyuserDetailService implements UserDetailsService{
    @Autowired
    UserRepository userReposistory;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
         User user= userReposistory.findByUserName(userName);
         if(user == null)
        throw new  UsernameNotFoundException("Not found"+userName);
        return new MyuserDetails(user);
    }
    
}
