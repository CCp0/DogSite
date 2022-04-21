import { Component, OnInit } from '@angular/core';
import { IDogDetails } from '../interfaces/dogDetails';
import { DogBreedAPIService } from '../services/dog-breed-api.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css'],
  providers:[DogBreedAPIService]
})
export class DogProfileComponent implements OnInit {
  dogData!: IDogDetails;
  errorMessage:any;

  constructor(private _dogService:DogBreedAPIService) { }

  ngOnInit(): void {
    this.getDogDetails();
  }
  getDogDetails() : boolean {
    this._dogService.getRandomDogData().subscribe(
      dogData => {
        this.dogData = dogData;
        this.dogData.breed = dogData.message.split('/')[4];
        console.log('Dog Pic Origin: ' + this.dogData.message);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
