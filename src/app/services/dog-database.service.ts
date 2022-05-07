import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EMPTY, Observable } from 'rxjs';
import { DogDetails } from '../interfaces/dogDetails.model';
import { LoginServiceService } from './login-service.service';
@Injectable({
  providedIn: 'root'
})
export class DogDatabaseService {

  favouriteCollection: AngularFirestoreCollection<DogDetails>;
  favouriteCollectionTwo: AngularFirestoreCollection<DogDetails>;
  displayDogData!: Observable<DogDetails[]>;
  favouriteDogData!: Observable<DogDetails[]>
  constructor(private _http:HttpClient, private _afs:AngularFirestore, private _login: LoginServiceService) {
    this.favouriteCollection = _afs.collection<DogDetails>("user1Favourites");
    this.favouriteCollectionTwo = _afs.collection<DogDetails>("user2Favourites");
  }
   getFavourites(): Observable<DogDetails[]>
   {
    if(this._login.getID() == 1)
    {
     this.favouriteDogData = this.favouriteCollection.valueChanges({idField:'id'});
      console.log("login1");
    }
    else if(this._login.getID() == 2)
    {
      this.favouriteDogData = this.favouriteCollectionTwo.valueChanges({idField:'id'});
      console.log("login2");
    }
    else{
      this.favouriteDogData = EMPTY;
      console.log("nologin " + this._login.getID());
    }
     return this.favouriteDogData;
   }
   addFavourite(dog:DogDetails): void
   {
     dog.title = "";
     if(this._login.getID() == 1)
     {
     this.favouriteCollection.add(JSON.parse(JSON.stringify(dog)));
     }
     else if(this._login.getID() == 2)
     {
      this.favouriteCollectionTwo.add(JSON.parse(JSON.stringify(dog)));
     }
     dog.userIDFavourite = true;
   }
   removeFavourite(dog:DogDetails): void
   {
    if(this._login.getID() == 1)
    {
    this.favouriteCollection.doc(dog.id).delete();
    }
    else if(this._login.getID() == 2)
    {
      this.favouriteCollectionTwo.doc(dog.id).delete();
    }
    dog.userIDFavourite = false;
   }
}