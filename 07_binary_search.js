// function binarySearchR(arr, target, left, right) {
//   if (left > righ) {
//     return -1;
//   }

//   middle = Math.floor((left + right) / 2);
//   potentialMatch = arr[middle];

//   if (target === potentialMatch) {
//     return middle;
//   } else if (target < potentialMatch) {
//     return binarySearchHelper(arr, target, left, middle - 1);
//   } else {
//     return binarySearchHelper(arr, target, middle + 1, right);
//   }
// }

// O(log(n)) time
// O(1) space

function binarySearchI(arr, target, left, right) {
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    potentialMatch = arr[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

module.exports = (arr, item) => {
  return binarySearchI(arr, target, 0, arr.length - 1);
};
