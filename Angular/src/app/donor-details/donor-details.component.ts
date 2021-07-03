import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { AuthenticationService } from '../login/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {

 
  mail!: String;
  donor: Donor;
  
  constructor(private donorService: DonorService,
   
   private route: ActivatedRoute,private router: Router
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
  
  
  gotoList() {
    this.router.navigate(['/welcome']);
  }


}
