import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
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
  name!: String;
  user: User;
  constructor(private userService: UserService
    ,private route: ActivatedRoute,private router: Router
    ) { 
    }

  ngOnInit():void{
    this.user=new User();
    this.name = this.route.snapshot.params['userName'];
    console.log("name");
    console.log(this.name);
    this.userService.getUserByUserName(this.name)
    .subscribe(data => {
      this.user = data;
      console.log(this.user);

    }, error => console.log(error));
  }
  
  onSubmit() {
    this.userService.updateUser(this.name, this.user)
    .subscribe(data => {
      this.gotoList();
    }, error => console.log(error));;    
  }
  gotoList() {
    this.router.navigate(['/welcome']);
  }


}
