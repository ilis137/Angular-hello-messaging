import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit{

  message:string = 'Hello World';
  imgUrl:string = "assets/BridgeLabz_New_Logo.svg"
  url:string = "https://www.bridgelabz.com";
  userName: string="";
  nameError:string="";
  ngOnInit(): void {
    this.message="Hello from bridgelabz";
  }

  handleClick(event:any) {
    console.log("bridgelabz logo is clicked",event);
    window.open(this.url,"_blank")
  }
  get customMessage(){
    return `Hello ${this.userName} from bridgelabz`;
  }

  onUserInput($event:any) {
    console.log("Change event occured!", $event)
    const nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "username Invalid!"
    }
  }
}
