export class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getdetails(){
        return `Name: ${this.name} Age: ${this.age}`;
        
    }
}