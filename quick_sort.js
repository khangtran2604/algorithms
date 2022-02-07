// Big-O is O(nlogn)
function quickSort(array) {
  if (array.length < 2) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivotItem = array[pivotIndex];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivotIndex) {
      if (array[i] < pivotItem) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }
  }
  return [...quickSort(leftArray), pivotItem, ...quickSort(rightArray)];
}

const array = [9, 4, 2, 5, 8, 10, 20, 13, 11, 18];
console.log(`Sort from ${JSON.stringify(array)}`);
const sortedArray = quickSort(array);
console.log(`To ${JSON.stringify(sortedArray)}`);
