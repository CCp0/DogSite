import { Component, Input } from '@angular/core';
import { DogDetails } from '../interfaces/dogDetails.model';
import { DogBreedAPIService } from '../services/dog-breed-api.service';
import { DogDatabaseService } from '../services/dog-database.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  providers:[DogBreedAPIService]
})
export class DogProfileComponent {
  
@Input() dogData!:DogDetails;
  constructor(private _dogService:DogBreedAPIService, private _dogDatabase:DogDatabaseService) { }

  favourite()
  {
    const fave = this._dogDatabase.addFavourite(this.dogData);
  }
  unfavourite()
  {
    const unfave = this._dogDatabase.removeFavourite(this.dogData);
  }
}
