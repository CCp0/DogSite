import { Injectable } from '@angular/core';
import { DogDetails, IDogDetails } from '../interfaces/dogDetails.model';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedAPIService {

  private _rndSiteURL="https://dog.ceo/api/breeds/image/random";
  private _startDogUrl = "https://dog.ceo/api/breed/";
  private _endDogUrl = "/images/random";
  constructor(private _http:HttpClient) { }

  getRandomDogData(): Observable<DogDetails> {
    return this._http.get<DogDetails>(this._rndSiteURL)
    .pipe(
      tap(data => console.log('DogData/error' + JSON.stringify(data))
      )
    );
  }
  searchDogData(dogSearch:string): Observable<DogDetails>
  {
    return this._http.get<DogDetails>(this._startDogUrl + dogSearch + this._endDogUrl);
  }
}