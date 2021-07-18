import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WebApiService} from '../api/web-api.service'
@Component({
  selector: 'app-welome-page',
  templateUrl: './welome-page.component.html',
  styleUrls: ['./welome-page.component.scss']
})
export class WelomePageComponent implements OnInit {
  signUp:boolean=false
  password:string;
  username:string;
    constructor(
    private router: Router,
    private webApi:WebApiService
  ) {}

  signUpToogle(flag: boolean){
this.signUp =flag
}

login(){
      this.router.navigateByUrl(`home`);}

  ngOnInit(): void {
  }

  authenticate(){
    this.webApi.authenticateUser(this.username,this.password).subscribe({
      next: res=>{
        console.log(res);
      }
    })
  }

}
