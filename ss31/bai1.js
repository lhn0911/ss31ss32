function ktra(a) {
    let b = a.split(' ');
    let longer = '';
    let longest = 0;

    for (let i = 0; i < b.length; i++) {
        let temp = b[i];
        if (temp.length > longest) {
            longer = temp;
            longest = temp.length;
        }
    }
    return [longer, longest];
}

let inputString = prompt("Nhập vào 1 chuỗi");
let arr = inputString.split(' ').map(Number);
let result = ktra(inputString);
console.log("Kết quả:", result);
