import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { AuthenticationService } from '../login/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  donors !:Donor[] ;
  bloodName:String;
  name:String;
  user:User;
  allow=false;
  constructor(private donorService:DonorService,
    private authenticationService:AuthenticationService,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.getDonors();
    this.name=this.authenticationService. getLoggedInUserName() ;
    console.log(this.name);
   this.user = new User();
    this.userService.getUserByUserName(this.name)
      .subscribe(data => {
        this.user = data;
        console.log(this.user.role)
        if(this.user.role=="Admin"){
          this.allow=true;
          console.log(this.allow)
        }
      }, error => console.log(error)); 
  }
  private getDonors(){
    this.donorService.getDonorList().subscribe(data =>{
      console.log(data);
      this.donors=data;
    });
    }
    deleteDonor(email:String){
      this.donorService.deleteDonor(email).subscribe(data =>{
        console.log(data);
        this.getDonors();
      })
    }
    updateDonor(email:String){
      this.router.navigate(['update-donor',email])
    }
    donorDetails(email:String){
      this.router.navigate(['donor-details',email])
    }
    Search(){
      if(this.bloodName==""){
        this.ngOnInit();
        console.log("check");
      }
      else{
        this.donors=this.donors.filter(res =>{
          console.log("checking");
          return res.bloodName.toLocaleLowerCase().match(this.bloodName.toLocaleLowerCase())
        })
      }
    }
    
}
