import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,  HelloComponentComponent]
})
export class AppModule { }
