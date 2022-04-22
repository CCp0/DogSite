import { Component, Input, OnInit } from '@angular/core';
import { IDogDetails } from '../interfaces/dogDetails';
import { DogBreedAPIService } from '../services/dog-breed-api.service';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css'],
  providers:[DogBreedAPIService]
})
export class DogProfileComponent implements OnInit {
  
@Input() dogData!:IDogDetails;
  constructor(private _dogService:DogBreedAPIService) { }

  ngOnInit(): void {
    
  }
}
