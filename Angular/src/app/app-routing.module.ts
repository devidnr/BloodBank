import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { DonorComponent } from './donor/donor.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update-user/:userName', component: UpdateUserComponent},
  {path: 'donor-details/:email', component: DonorDetailsComponent},

  {path: 'update-donor/:email', component: UpdateDonorComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bank', component: BankComponent},
  {path: 'donor', component: DonorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
