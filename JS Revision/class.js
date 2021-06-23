class Person {
    setDetails(name,occupation){
        this.name = name;
        this.occupation = occupation;
    }
    
    constructor(name){
        this.name = name;
    }
    name = "Vipin Kumar";
}
let obj1  = new Person("Ram");
console.log(obj1);
// let obj1  = new Person();
obj1.setDetails("Narendra Modi", "Pakoda Seller");
console.log(obj1);