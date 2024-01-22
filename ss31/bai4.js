function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
}
let inputN = prompt('Nhập số n: ');
let inputString = prompt('Nhập chuỗi: ');
const n = parseInt(inputN);
let result = truncate(inputString, n);
console.log(result);
