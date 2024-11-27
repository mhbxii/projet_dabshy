import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDataPassService } from '../../services/profileDataPass.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {  
  constructor(private profileService: ProfileDataPassService, public router: Router, public authService: AuthService) {}


  user : User = {
    userId : '1',
    userName : 'mhbxii',
    userEmail : 'mhbxii@gmail.com',
    profileImageUrl : "assets/images/profilepic.png",
    userPhoneNumber : "+21624644429",
    userRegion : "Kebili",
    isLoggedIn : false,
  };
  

  onProfileClick(user: User) {
    this.profileService.setProfile(user);
    this.router.navigate(['/profile', user.userId]);
  }

  goToAddArticle(){
    if(this.authService._isLoggedIn)
      this.router.navigate(["/addArticle"]);
    else alert("Login First!!");
  }

  goToLogin(){
    if(this.router.url == '/addArticle' && this.authService._isLoggedIn)
      this.router.navigate(["/"]);
    else
      this.router.navigate(["/login"]);
  }

}
  
