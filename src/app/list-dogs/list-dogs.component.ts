import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async, Observable } from 'rxjs';
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
  rndDogData!: DogDetails;
  dogsData!: DogDetails[];
  searchedDogData!:DogDetails;
  //Dog Object URL
  private _startDogUrl = "https://dog.ceo/api/breed/";
  private _endDogUrl = "/images/random";
  //User Info
  //userID = LoginComponent.arguments.userID;
  
  errorMessage:any;

  constructor(private _dogService:DogBreedAPIService, private _dogDatabase:DogDatabaseService) {
    this._dogDatabase.getFavourites().subscribe(
      dogsData =>
      {
        this.dogsData = dogsData;
        dogsData.forEach(dog => {
          dog.userIDFavourite = true;
        });
      }
    );
   }

  ngOnInit(): void {
    
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
          for(let i = 0; i < this.dogsData?.length; i++)
          {
            if(searchedDogData.breed == this.dogsData[i].breed)
            {
                searchedDogData.userIDFavourite = true;
            }
          }
          console.log(searchedDogData);
        }
      )
  }
}