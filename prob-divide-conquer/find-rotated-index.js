function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      // If the left half is sorted
      if (arr[start] <= arr[mid]) {
        if (arr[start] <= num && num < arr[mid]) {
          end = mid - 1; // Search in the left half
        } else {
          start = mid + 1; // Search in the right half
        }
      }
      // If the right half is sorted
      else {
        if (arr[mid] < num && num <= arr[end]) {
          start = mid + 1; // Search in the right half
        } else {
          end = mid - 1; // Search in the left half
        }
      }
    }
  
    return -1; // Number not found
  }
  
  module.exports = findRotatedIndex;

    findRotatedIndex([3,4,1,2],4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1