package com.example.blood_bank.Repository;

import com.example.blood_bank.Models.Blood;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
@Transactional
public interface BloodRepository extends JpaRepository<Blood,String>{
  Blood findByEmail(String email);
  
/*  @Query(value = "delete from Blood b where b.dateoperation < now() - interval 30 DAY")
 */  
@Modifying
@Query(value = "DELETE FROM Blood b where b.dateoperation < now() - interval 90 DAY", nativeQuery=true)
public void deleteRecord();
}
