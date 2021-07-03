import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user !:User;
  name!:String;
    constructor(private userService: UserService
      ,private route: ActivatedRoute,private router: Router,
      private authenticationService: AuthenticationService,
    ) { }
  
    ngOnInit() {
      
      this.name=this.authenticationService.getLoggedInUserName();
      console.log(this.name);
      this.user = new User();
      this.userService.getUserByUserName(this.name)
        .subscribe(data => {
          this.user = data;
        }, error => console.log(error));
    }
    gotoList() {
      this.router.navigate(['/welcome']);
    }
    updateUser(name:String){
      this.router.navigate(['update-user',name])
    }
}
