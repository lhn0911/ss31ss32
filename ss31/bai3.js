function ktra(str, target) {
    return str.endsWith(target);
}

console.log(ktra("Hello world", "world")); 
console.log(ktra("Hello world", "orld")); 
console.log(ktra("Hello world", "world2")); 
