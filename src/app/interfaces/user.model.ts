export interface IUser {
    userID:number,
    username:string,
    password:string
}
export class User {
    userID:number;
    username:string;
    password:string;
    constructor(userID:number, username:string, password:string)
    {
        this.userID = userID;
        this.username = username;
        this.password = password;
    }
}