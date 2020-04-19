import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto de Front End';
  nombre = "Andres Torres"
  
  
  /**
   *  Constructor of the class 
   */
  constructor () {
    console.log ("CREATED ...")
  
   
  }
}
