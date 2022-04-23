export interface IDogDetails {
    title:string;
    message: string; //image url
    status: string;
    breed: string;
    rank:number;
    votes:number;
    userIDFavourite:number;
}
export class DogDetails {
    title:string;
    message: string;
    breed: string;
    rank:number;
    votes:number;

constructor(message:string, breed:string, rank:number ,votes?:number, title?:string) {
    this.title = title || "";
    this.message = message;
    this.breed = breed;
    this.rank = rank;
    this.votes = votes || 0;
}
voteUp()
{
    this.votes++;
}
voteDown()
{
    this.votes--;
}
}