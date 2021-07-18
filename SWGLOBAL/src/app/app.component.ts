import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWGLOBAL';
  signUp:boolean=false


   constructor(
    private router: Router,
  ) {}

  signUpToogle(flag: boolean){
this.signUp =flag
}

login(){
      this.router.navigateByUrl(`home`);

}
}

