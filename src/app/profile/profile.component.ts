import { Component } from '@angular/core';
import { ProfileDataPassService } from '../../services/profileDataPass.service';
import { User } from '../user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private profileDataSrc : ProfileDataPassService, private auth : AuthService, private router : Router){};

  user :User = {
    userId : '',
    userName : '',
    userEmail : '',
    profileImageUrl : '',
    userPhoneNumber : '',
    userRegion : '',
    isLoggedIn : false,
  };;

  ngOnInit(){
    this.profileDataSrc.currentUser.subscribe((data) =>
      {if (data) this.user = data;}
    );
  }

  logMeOut(){
    this.auth.isLoggedIn = false;
    this.router.navigate(["/"]);
  }


}
