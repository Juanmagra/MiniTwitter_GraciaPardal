import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AllTweetsComponent } from './components/all-tweets/all-tweets.component';

import { LoginService } from './services/login.service';
import {TweetService} from './services/tweet.service';

import{MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import { RegistroService } from './services/registro.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllTweetsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule

  ],
  providers: [LoginService, TweetService,RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
