export class Gebruiker {
    gebruikerID: number;
    username: string;
    email:string;
    password:string;

    constructor(gebruikerID:number,username:string, email:string, password:string){
        this.gebruikerID = gebruikerID;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
