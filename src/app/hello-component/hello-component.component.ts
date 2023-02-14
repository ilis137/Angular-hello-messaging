import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit{
  
  message:string = 'Hello World';
  imgUrl:string = "assets/BridgeLabz_New_Logo.svg"
  ngOnInit(): void {
    this.message="Hello from bridgelabz";
  }
}
