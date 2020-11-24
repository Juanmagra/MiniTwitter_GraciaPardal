import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule, MatIcon, MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    FlexLayoutModule
    

  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
