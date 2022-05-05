import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DogDetails, IDogDetails } from '../interfaces/dogDetails.model';
import { IUser } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class DogDatabaseService {

  dogDataCollection: AngularFirestoreCollection<DogDetails>;
  favouriteCollection: AngularFirestoreCollection<DogDetails>;
  displayDogData!: Observable<DogDetails[]>;
  favouriteDogData!: Observable<DogDetails[]>
  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
    this.dogDataCollection = _afs.collection<DogDetails>("displayDogs");
    this.favouriteCollection = _afs.collection<DogDetails>("user1Favourites");
   }
   getDisplayDogData(): Observable<DogDetails[]>
   {
     this.displayDogData = this.dogDataCollection.valueChanges();
     return this.displayDogData;
   }
   getFavourites(userID:number): Observable<DogDetails[]>
   {
     this.favouriteDogData = this.favouriteCollection.valueChanges();
     return this.favouriteDogData;
   }
   addFavourite(dog:DogDetails): void
   {
     this.favouriteCollection.add(JSON.parse(JSON.stringify(dog)));
     dog.userIDFavourite = true;
   }
   removeFavourite(dog:DogDetails): void
   {
    this.favouriteCollection.doc().delete;
    dog.userIDFavourite = false;
   }
}