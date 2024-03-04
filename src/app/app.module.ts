//HttpclientModuel->to access HTTPClient services
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//FormsModule->to access ngModel
import { FormsModule } from '@angular/forms'; //ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddeventcomponentComponent } from './components/addeventcomponent/addeventcomponent.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddeventcomponentComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,//render components into client
    AppRoutingModule,//routing, SPA
    HttpClientModule,//HTTP Request, Response
    FormsModule//Form inputs,access, ngModel
  ],
  providers: [],
  //render default component
  bootstrap: [AppComponent]
})
export class AppModule { }
