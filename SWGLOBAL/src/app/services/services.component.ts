import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PurchaseCardComponent} from '../purchase-card/purchase-card.component'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 openDialog(service:string): void {
    let dialogRef = this.dialog.open(PurchaseCardComponent, {
      width: '40%',
      data: { service: service }
    });
  
   
  }
 
}
