export interface IDogDetails {
    title:string;
    message: string; //image url
    breed: string;
    rank:number;
    Likes:number;
    userIDFavourite:boolean;
}
export class DogDetails implements IDogDetails{
    title:string;
    message: string;
    breed: string;
    rank:number;
    Likes:number;
    userIDFavourite:boolean;
constructor(message:string, breed:string, rank:number ,votes?:number, title?:string, userIDFavourite?:boolean) {
    this.title = title || "";
    this.message = message;
    this.breed = breed;
    this.rank = rank;
    this.Likes = votes || 0;
    this.userIDFavourite = false;
}
voteUp()
{
    this.Likes++;
}
voteDown()
{
    this.Likes--;
}
}