import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IDogDetails } from '../interfaces/dogDetails.model';
import { IUser } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class DogDatabaseService {

  dogDataCollection: AngularFirestoreCollection<IDogDetails>;
  favouriteCollection: AngularFirestoreCollection<IDogDetails>;
  displayDogData!: Observable<IDogDetails[]>;
  favouriteDogData!: Observable<IDogDetails[]>
  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
    this.dogDataCollection = _afs.collection<IDogDetails>("displayDogs");
    this.favouriteCollection = _afs.collection<IDogDetails>("favouriteDogs");
   }
   getDisplayDogData(): Observable<IDogDetails[]>
   {
     this.displayDogData = this.dogDataCollection.valueChanges();
     return this.displayDogData;
   }
   getFavourites(userID:number): Observable<IDogDetails[]>
   {
     this.favouriteDogData = this.favouriteCollection.valueChanges();
     return this.favouriteDogData;
   }
   addFavourite(dog:IDogDetails): void
   {
     this.favouriteCollection.add(JSON.parse(JSON.stringify(dog)));
   }
}
