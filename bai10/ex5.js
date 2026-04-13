function xuLyMang(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
const binhPhuong = xuLyMang(numbers, (number) => number * number);
console.log(binhPhuong);

const nhan2 = xuLyMang(numbers, (number) => number * 2);
console.log(nhan2);
