import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  groups=[
    {id:1,name:"O +ve"},
    {id:2,name:"O -ve"},
    {id:3,name:"A +ve"},
    {id:4,name:"A -ve"},
    {id:5,name:"B +ve"},
    {id:6,name:"B -ve"},
    {id:7,name:"AB +ve"},
    {id:8,name:"AB -ve"},
  ]
  roles=[
    {id:1,name:"Admin"},
    {id:2,name:"User"},
  ]
  user:User=new User();
  constructor(private userService:UserService,
private router:Router){}
  ngOnInit(): void {
  }
  saveEmployee(){
    this.userService.createUser(this.user).subscribe(data =>{
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
this.router.navigate(['/login']);
  }
onSubmit(){
  this.saveEmployee();
}

}
