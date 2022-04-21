import { Injectable } from '@angular/core';
import { IDogDetails } from '../interfaces/dogDetails';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedAPIService {

  private _rndSiteURL="https://dog.ceo/api/breeds/image/random";
  constructor(private _http:HttpClient) { }

  getRandomDogData(): Observable<IDogDetails> {
    return this._http.get<IDogDetails>(this._rndSiteURL)
    .pipe(
      tap(data => console.log('DogData/error' + JSON.stringify(data))
      )
    );
  }

}