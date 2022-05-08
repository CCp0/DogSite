import { Component } from '@angular/core';
import { DogDetails } from '../interfaces/dogDetails.model';
import { DogBreedAPIService } from '../services/dog-breed-api.service';
import { DogDatabaseService } from '../services/dog-database.service';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html'
})
export class ListDogsComponent {
  //All dog data
  rndDogData!: DogDetails;
  dogsData!: DogDetails[];
  searchedDogData!:DogDetails;
  
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
    dogSearch = dogSearch.toLowerCase();
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
        }
      )
  }
}