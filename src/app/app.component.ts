import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fname:string="";
  lname:string="";
  email:string="";
  mas:string="";
   
  saveUser( ){
  
    this.mas="Data Save sucessfully";
  }
}

