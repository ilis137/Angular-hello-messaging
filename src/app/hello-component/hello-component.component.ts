import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit{
  
  message:string = 'Hello World';

  ngOnInit(): void {
    this.message="Hello from bridgelabz";
  }
}
