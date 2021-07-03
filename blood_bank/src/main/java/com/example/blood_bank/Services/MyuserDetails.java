package com.example.blood_bank.Services;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.example.blood_bank.Models.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyuserDetails implements UserDetails{
    private String userName;
    private String password;
    private List<GrantedAuthority> authorities;
    public MyuserDetails(User user){
this.userName=user.getUserName();
this.password=user.getPassword();
this.authorities=Arrays.stream(user.getRole().split(","))
.map(SimpleGrantedAuthority::new)
.collect(Collectors.toList());
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
       // System.out.print("1"+authorities);
        return authorities;
    }
    @Override
    public String getPassword() {
       // System.out.print("2"+password);
        return password;
    }
    @Override
    public String getUsername() {
       // System.out.print("3"+userName);
        return userName;
    }
    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }
    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }
    
}
