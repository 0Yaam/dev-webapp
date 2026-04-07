function chanLuong()
{
    console.log("start");
    let batdau = Date.now();
    while(Date.now() - batdau < 5000){

    }
    console.log("running process 5s completed");
}

console.log("before run");
chanLuong();
console.log("after run");