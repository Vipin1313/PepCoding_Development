let arr = [2, 3, 4, 5, 6, 7];

let squareArray = arr.map(function(data,index){
    return data * data;
});
console.log(arr);
console.log(squareArray);

let oddArray = arr.filter(function(data){
    return data % 2 != 0;
});
console.log(oddArray);


