import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {WelomePageComponent} from './welome-page/welome-page.component'

const routes: Routes = [
   {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
        path: 'welcome',
        component: WelomePageComponent,
      },
   {
        path: 'home',
        component: HomePageComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   

}
