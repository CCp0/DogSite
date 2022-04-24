import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogDetails, IDogDetails } from '../interfaces/dogDetails.model';
import { User } from '../interfaces/user.model';
import { LoginComponent } from '../login/login.component';
import { DogBreedAPIService } from '../services/dog-breed-api.service';
import { DogDatabaseService } from '../services/dog-database.service';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.css']
})
export class ListDogsComponent implements OnInit {
  //All dog data
  rndDogData!: IDogDetails;
  dogsData!: IDogDetails[];
  searchedDogData!:IDogDetails;
  userFavourites!:IDogDetails[];
  //Dog Image URL
  private _startDogUrl = "https://dog.ceo/api/breed/";
  private _endDogUrl = "/images/random";
  //User Info
  //userID = LoginComponent.arguments.userID;
  
  errorMessage:any;

  constructor(private _dogService:DogBreedAPIService, private _dogDatabase:DogDatabaseService) {
    
   }

  ngOnInit(): void {
    this._dogDatabase.getDisplayDogData().subscribe(
      dogsData =>
      {
        this.dogsData = dogsData;
      }
    );
      for(let i = 0; i < this.dogsData.length; i++)
      {
        this.dogsData[i].message = this._startDogUrl + this.dogsData[i].breed + this._endDogUrl;
      }
  }

  getDogDetails(i:number) : IDogDetails {
    this._dogService.getRandomDogData().subscribe(
      dogData => {
        this.dogsData[i] = dogData;
        this.dogsData[i].breed = dogData.message.split('/')[4];
        console.log('Dog Pic Origin: ' + this.dogsData[i].message);
      },
      error => this.errorMessage = <any>error
    );
    return this.dogsData[i];
  }
  getRandomDogDetails() : boolean {
    this._dogService.getRandomDogData().subscribe(
      rndDogData => {
        this.rndDogData = rndDogData;
        this.rndDogData.breed = rndDogData.message.split('/')[4];
        this.rndDogData.title = "Random Dog";
        console.log('Random Dog Pic Origin: ' + this.rndDogData.message);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
  searchDogDetails(dogSearch: string)
  {
      this._dogService.searchDogData(dogSearch).subscribe(
        searchedDogData =>{
          this.searchedDogData = searchedDogData;
          this.searchedDogData.breed = dogSearch;
          this.searchedDogData.title = "Search Result";
          console.log(searchedDogData);
        }
      )
  }
}
