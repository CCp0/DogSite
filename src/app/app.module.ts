import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { ListDogsComponent } from './list-dogs/list-dogs.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DogProfileComponent,
    ListDogsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "home" },
      {path: 'login', component: LoginComponent },
      {path: 'dogs', component: ListDogsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
