export class Gebruiker {
    token(arg0: string, token: any) {
        throw new Error("Method not implemented.");
      }
    gebruikerId: number;
    email:string;
    username:string;
    password:string;

    constructor(gebruikerId:number, username:string, email:string, password:string){
        this.gebruikerId = gebruikerId;
        this.email = email;
        this.password = password;
        this.username = username;
    }
}
