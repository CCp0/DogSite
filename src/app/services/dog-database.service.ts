import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EMPTY, Observable } from 'rxjs';
import { DogDetails, IDogDetails } from '../interfaces/dogDetails.model';
import { IUser } from '../interfaces/user.model';
import { LoginServiceService } from './login-service.service';
@Injectable({
  providedIn: 'root'
})
export class DogDatabaseService {

  dogDataCollection: AngularFirestoreCollection<DogDetails>;
  favouriteCollection: AngularFirestoreCollection<DogDetails>;
  favouriteCollectionTwo: AngularFirestoreCollection<DogDetails>;
  displayDogData!: Observable<DogDetails[]>;
  favouriteDogData!: Observable<DogDetails[]>
  constructor(private _http:HttpClient, private _afs:AngularFirestore, private _login: LoginServiceService) {
    this.dogDataCollection = _afs.collection<DogDetails>("displayDogs");
    this.favouriteCollection = _afs.collection<DogDetails>("user1Favourites");
    this.favouriteCollectionTwo = _afs.collection<DogDetails>("user2Favourites");
  }
   getDisplayDogData(): Observable<DogDetails[]>
   {
     this.displayDogData = this.dogDataCollection.valueChanges({idField:'id'});
     return this.displayDogData;
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
     this.favouriteCollection.add(JSON.parse(JSON.stringify(dog)));
     dog.userIDFavourite = true;
   }
   removeFavourite(dog:DogDetails): void
   {
    this.favouriteCollection.doc(dog.id).delete();
    dog.userIDFavourite = false;
   }
}