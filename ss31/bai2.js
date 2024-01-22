function ktra(...a) {
    if (a.length === 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        let b = a[i];
        let max = b[0];
        for (let j = 0; j < b.length; j++) {
            let value = b[j];
            if (value > max) {
                max = value;
            }
        }
        arr.push(max);
    }
    return arr;
}
let c = ktra([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
console.log(c);
let c1 = ktra([1, 2, 3, 4], [5, 1, 2, 9]);
console.log(c1);
let c2 = ktra();
console.log(c2);
