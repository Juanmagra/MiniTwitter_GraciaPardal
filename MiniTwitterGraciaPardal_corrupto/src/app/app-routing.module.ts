import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllTweetsComponent } from './components/all-tweets/all-tweets.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'allTweets', component: AllTweetsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
