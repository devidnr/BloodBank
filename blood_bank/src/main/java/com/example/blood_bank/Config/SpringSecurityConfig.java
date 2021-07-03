package com.example.blood_bank.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    UserDetailsService userDetailsService;
@Override
public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
}
    @Override
   protected void configure(AuthenticationManagerBuilder auth) throws Exception { 
    auth.userDetailsService(userDetailsService);
}
@Override
public void configure(WebSecurity web) throws Exception {
    web.ignoring().antMatchers("/user/user");

}
    @Override
	protected void configure(HttpSecurity http) throws Exception {
	http.csrf().disable().cors()
    .and().authorizeRequests()
	.antMatchers(HttpMethod.OPTIONS, "/blood/**").permitAll().anyRequest()
				.authenticated().and()
				// .formLogin().and()
				.httpBasic();
	}
       
       @Bean
       public static NoOpPasswordEncoder passwordEncoder(){
           return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
       }
}
