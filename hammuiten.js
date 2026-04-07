const thongBao = () =>{
    console.log("chua co thong bao");
}
thongBao();

const binhPhuong = x => x * x;
console.log(binhPhuong(2));

const numbers = [0,1,2,3];
numbers.forEach(num => console.log(num * 2));

const cong = (x,y) => {
    return x+y;
}

console.log(cong(2,4));


function Person(){
    this.age = 0;
    setInterval(()=> {
        this.age++;
        console.log(this.age);
    }, 1000);
}


