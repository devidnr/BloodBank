import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

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
  genders=[
    {id:1,name:"male"},
    {id:2,name:"female"},
    {id:3,name:"transgender"}
  ]
  healths=[
    {id:1,name:"sugar"},
    {id:2,name:"BP"},
    {id:3,name:"both(sugar,BP)"},
    {id:4,name:"None"}
  ]
  selectedValue = null;
  donor:Donor=new Donor();
  constructor(private donorService:DonorService,
private router:Router){}
  ngOnInit(): void {
  }
  saveDonor(){
    this.donorService.createDonor(this.donor).subscribe(data =>{
      this.goToDonorList();
    },
    error => console.log(error));
  }
  goToDonorList(){
this.router.navigate(['/welcome']);
  }
onSubmit(){
console.log("sub")
  this.saveDonor();
}

}
