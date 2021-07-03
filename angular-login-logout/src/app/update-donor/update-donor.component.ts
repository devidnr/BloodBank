import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {
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
  genders=[
    {id:1,name:"male"},
    {id:2,name:"female"}
  ]
  healths=[
    {id:1,name:"sugar"},
    {id:2,name:"BP"},
    {id:3,name:"both(sugar,BP)"},
    {id:4,name:"None"}
  ]
  mail!: String;
  donor: Donor;
  constructor(private donorService: DonorService
    ,private route: ActivatedRoute,private router: Router
    ) { 
    }

  ngOnInit():void{
    this.donor=new Donor();
    this.mail = this.route.snapshot.params['email'];
   console.log("mail")
   console.log(this.mail)
    this.donorService.getDonorByEmail(this.mail)
    .subscribe(data => {
      this.donor = data;
      console.log(this.donor);

    }, error => console.log(error));
  }
  
  onSubmit() {
    this.donorService.updateDonor(this.mail, this.donor)
    .subscribe(data => {
      this.gotoList();
    }, error => console.log(error));;    
  }
  gotoList() {
    this.router.navigate(['/welcome']);
  }

}
