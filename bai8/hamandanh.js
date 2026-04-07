const cong = function (x,y) {
    return x + y;
}

setTimeout(() => {
    console.log("da het 3s, sau 3s");
}, 3000);


let numbers = [0,1,2,3,4];
numbers.forEach((num) =>{
    console.log(num+1);
});


console.log(cong(3,3));
