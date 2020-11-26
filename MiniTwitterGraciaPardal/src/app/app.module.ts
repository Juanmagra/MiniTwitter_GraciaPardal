import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule,MatMenuModule, MatIcon, MatToolbar} from '@angular/material';
import { AllTweetsComponent } from './components/all-tweets/all-tweets.component';
import {TweetService} from './services/tweet.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllTweetsComponent,
    MatIcon,
    MatToolbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatTableModule,
  ],
  providers: [LoginServiceService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
