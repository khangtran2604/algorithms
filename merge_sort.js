// Big-O is O(nlogn)
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftChildArray = [...array].splice(0, middleIndex);
  const rightChildArray = [...array].splice(middleIndex);
  return sort(mergeSort(leftChildArray), mergeSort(rightChildArray));
}

function sort(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sorted.push(arr2.shift());
    } else {
      sorted.push(arr1.shift());
    }
  }
  return [...sorted, ...arr1, ...arr2];
}

const array = [9, 4, 2, 5, 8, 10, 20, 13, 11, 18];
console.log(`Sort from ${JSON.stringify(array)}`);
const sortedArray = mergeSort(array);
console.log(`To ${JSON.stringify(sortedArray)}`);
