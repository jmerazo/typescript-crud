export class User{
    private name:string;
    private lastname:string;
    private phone:string;
    private email:string;
    private password:string;

    constructor(name:string,lastname:string,phone:string,email:string,password:string){
        this.name=name;
        this.lastname=lastname;
        this.phone=phone;
        this.email=email;
        this.password=password;
    }
    public getName():string{
        return this.name;
    }
    public getLastname():string{
        return this.lastname;
    }
    public getPhone():string{
        return this.phone;
    }
    public getEmail():string{
        return this.email;
    }
    public getPassword():string{
        return this.password;
    }
}