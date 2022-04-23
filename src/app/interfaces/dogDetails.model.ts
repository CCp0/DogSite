export interface IDogDetails {
    title:string;
    message: string; //image url
    status: string;
    breed: string;
    rank:number;
    votes:number;
}
export class DogDetails {
    title:string;
    message: string;
    breed: string;
    rank:number;
    votes:number;

constructor(title:string, message:string, breed:string, rank:number ,votes?:number) {
    this.title = title;
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