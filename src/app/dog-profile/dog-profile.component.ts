import { Component, Input, OnInit } from '@angular/core';
import { DogDetails, IDogDetails } from '../interfaces/dogDetails.model';
import { DogBreedAPIService } from '../services/dog-breed-api.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css'],
  providers:[DogBreedAPIService]
})
export class DogProfileComponent implements OnInit {
  
@Input() dogData!:DogDetails;
  constructor(private _dogService:DogBreedAPIService) { }

  ngOnInit(): void {
    
  }
  voteUp():boolean{
    this.dogData.voteUp();
    return false;
    }
  voteDown():boolean{
     this.dogData.voteDown();
    return false;
    }
  favourite()
  {

  }
}
