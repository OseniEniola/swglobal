import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
show:string='services';
  constructor() { }

  ngOnInit(): void {
  }

  toggleView(page:string){
this.show=page
  }
}
