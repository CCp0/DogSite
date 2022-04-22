import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDogDetails } from '../interfaces/dogDetails.model';
import { DogBreedAPIService } from '../services/dog-breed-api.service';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.css']
})
export class ListDogsComponent implements OnInit {
  //All dog data
  rndDogData!: IDogDetails;
  dogsData:IDogDetails[] = new Array(2);
  searchedDogData!:IDogDetails;
  userFavourites!:IDogDetails[];

  errorMessage:any;

  constructor(private _dogService:DogBreedAPIService) { }

  ngOnInit(): void {
    for(let i = 0; i < this.dogsData.length; i++)
    {
      this.getDogDetails(i);
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
          console.log(searchedDogData);
        }
      )
  }
}
