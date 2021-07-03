import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users !:User[] ;
  firstName!: string;
  
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
this.userService.getUserList().subscribe(data =>{
  console.log(data);
  this.users=data;
});
  }
  
updateUser(userName:String){
  
  this.router.navigate(['update-user',userName])
}

deleteUser(name:String){
  this.userService.deleteUser(name).subscribe(data =>{
    console.log(data);
    this.getUsers();
  })
}


}
