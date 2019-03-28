import { Component, OnInit } from '@angular/core';
import {AuthenticationService,User} from '../../services/authentication.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User={
    name:'',
    email:'',
    username:'',
    password:''
  }
  constructor(private auth:AuthenticationService,private flash:NgFlashMessageService,private router:Router) { }
  signin(){
    this.auth.authenticateUser(this.user).subscribe((data)=>{
      console.log(data);
      if(data.success){
        this.router.navigateByUrl('/category');
        this.auth.storeUserData(data.token,data.user);
        this.flash.showFlashMessage({messages:['LogIn Sucessfull!!'],
        dismissible:true,
        timeout:10000,
       type:'success'});
       
      }else{
        this.flash.showFlashMessage({messages:[data.msg],
        dismissible:true,
        timeout:10000,
       type:'danger'});
       return true
      }
    });
  }
  signUp(){
    this.auth.registerUser(this.user).subscribe((data)=>{
      if(data.success){
        this.flash.showFlashMessage({messages:['Registration Successful'],
        dismissible:true,
        timeout:10000,
       type:'success'});
      }else{
        this.flash.showFlashMessage({messages:['Registration Unsuccssful'],
        dismissible:true,
        timeout:10000,
       type:'danger'});
      }
    });
 } 
  ngOnInit() {
  }

}
