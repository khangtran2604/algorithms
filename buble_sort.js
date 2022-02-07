// Big-O is O(n^2)
function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

const array = [9, 4, 2, 5, 8, 10, 20, 13, 11, 18];
console.log(`Sort from ${JSON.stringify(array)}`);
bubleSort(array);
console.log(`To ${JSON.stringify(array)}`);
