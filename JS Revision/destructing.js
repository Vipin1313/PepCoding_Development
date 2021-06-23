const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters',
        school: {
            name: 'SPS',
            location: 'Pitampura'
        }
    },
    friends: ["Falcon", "Bucky"]
};

//1st method using dots
let degree1 = user.education.degree;

//2nd method using 
let {education: {degree}} = user;
console.log(degree);
let {education: {school:{name,location}}} = user;
console.log(name);
console.log(location);

//copy array
let arr = [2, 3, 4, 5, 6, 7];
let copyArray = [...arr];
console.log(copyArray);

//copy object
let obj1 = {
    "name" : "sita",
}
let obj2 = {...obj1};
