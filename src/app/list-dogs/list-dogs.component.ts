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
  rndDogData!: DogDetails;
  dogsData!: DogDetails[];
  searchedDogData!:DogDetails;
  userFavourites!:DogDetails[];
  //Dog Object URL
  private _startDogUrl = "https://dog.ceo/api/breed/";
  private _endDogUrl = "/images/random";
  //User Info
  //userID = LoginComponent.arguments.userID;
  
  errorMessage:any;

  constructor(private _dogService:DogBreedAPIService, private _dogDatabase:DogDatabaseService) {
    
   }

  ngOnInit(): void {
    console.log("Test Start");
    this._dogDatabase.getDisplayDogData().subscribe(
      dogsData =>
      {
        this.dogsData = dogsData;
      }
    );
    this._dogDatabase.getFavourites(1).subscribe(
      userFavourites =>
      {
        this.userFavourites = userFavourites;
      }
    );
    console.log("No. of Favourites: " + this.userFavourites?.length);
    console.log("No. of Base Dogs: " + this.dogsData?.length);
    console.log("Test Complete");
  }

  getDogDetails(i:number) : DogDetails {
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
          for(let i = 0; i < this.userFavourites.length; i++)
          {
            if(searchedDogData.breed == this.userFavourites[i].breed)
            {
                searchedDogData.userIDFavourite = true;
            }
          }
          console.log(searchedDogData);
        }
      )
  }
}
