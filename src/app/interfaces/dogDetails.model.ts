export interface IDogDetails {
    message: string; //image url
    status: string;
    breed: string;
    rank:number;
    votes:number;
}
export class DogDetails {
    message: string;
    breed: string;
    rank:number;
    votes:number;

constructor(message:string, breed:string, rank:number ,votes?:number) {
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