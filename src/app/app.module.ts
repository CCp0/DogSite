import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { ListDogsComponent } from './list-dogs/list-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    DogProfileComponent,
    ListDogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
