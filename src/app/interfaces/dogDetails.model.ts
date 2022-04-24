export interface IDogDetails {
    title:string;
    message: string; //image url
    breed: string;
    rank:number;
    Likes:number;
    userIDFavourite:number;
}
export class DogDetails implements IDogDetails{
    title:string;
    message: string;
    breed: string;
    rank:number;
    Likes:number;
    userIDFavourite:number;
constructor(message:string, breed:string, rank:number ,votes?:number, title?:string, userIDFavourite?:number) {
    this.title = title || "";
    this.message = message;
    this.breed = breed;
    this.rank = rank;
    this.Likes = votes || 0;
    this.userIDFavourite = userIDFavourite || 0;
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