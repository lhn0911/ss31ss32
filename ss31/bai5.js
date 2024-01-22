function ktra(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
let inputArray = prompt("Nhập các phần tử của mảng (phân tách bởi dấu phẩy): ");
let userArray = inputArray.split(",");
let nValue = parseInt(prompt("Nhập giá trị của n: "), 10);

let result = ktra(userArray, nValue);
console.log(result);
