import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelomePageComponent } from './welome-page/welome-page.component';
import { ServicesComponent } from './services/services.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ReportsComponent } from './reports/reports.component';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomePageComponent,
    WelomePageComponent,
    ServicesComponent,
    ServiceListComponent,
    ReportsComponent,
    PurchaseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
