import { Component, OnInit } from '@angular/core';
import { Home2Component } from '../home2/home2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ch2= new Home2Component;
  shuh='pin!';
  constructor() { }
  xshupin(){
    this.ch2.shupin();
  }
  ngOnInit(): void {
    
  }

}
