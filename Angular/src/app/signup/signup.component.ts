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
    {id:1,name:"O positive"},
    {id:2,name:"O negative"},
    {id:3,name:"A positive"},
    {id:4,name:"A negative"},
    {id:5,name:"B positive"},
    {id:6,name:"B negative"},
    {id:7,name:"AB positive"},
    {id:8,name:"AB negative"},
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
