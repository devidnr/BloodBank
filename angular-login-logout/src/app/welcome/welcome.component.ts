import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name!:String ;
  isLoggedIn = false;
  opened = false;
  check=false;
  donate=true;
  donor=false;
  allow=false;
 user !:User; 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
   private userService:UserService ) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
   this.name=this.authenticationService. getLoggedInUserName() ;
   console.log(this.name);
  this.user = new User();
   this.userService.getUserByUserName(this.name)
     .subscribe(data => {
       this.user = data;
       console.log(this.user.role);
       if(this.user.role=="Admin"){
         this.allow=true;
       }
     }, error => console.log(error)); 
  }

  toggleSideBar(){
    this.opened =true;
    this.check=false;
    this.donate=false;
    this.donor=false;
  }
  isbank(){
    this.check =true;
    this.opened=false;
    this.donate=false;
    this.donor=false;

  }
  isdonor(){
    this.donor =true;
    this.opened=false;
    this.donate=false;
    this.check=false;

  }
  handleLogout() {
    this.authenticationService.logout();
  }

}
