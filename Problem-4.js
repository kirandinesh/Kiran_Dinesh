function countMultiples(arr) {
  let result = {};

  for (let i = 1; i <= 9; i++) {
    let count = 0;
    for (let num of arr) {
      if (num % i === 0) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
}

const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));
