import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss']
})
export class PurchaseCardComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,) { }
selectedService:string
  ngOnInit(): void {
    this.selectedService = this.data.service;
  }

}
