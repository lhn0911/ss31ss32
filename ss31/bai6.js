function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {  
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  let result1 = fakeFind([5, 6, 7, 8], function (e) {
    return e % 2 === 0;
  });
  console.log(result1); 
  let result2 = fakeFind([1, 2, 3, 4], function (e) {
    return e % 2 !== 0;
  });
  console.log(result2);
  