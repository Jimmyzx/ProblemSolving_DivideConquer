function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      // If the subarray is already sorted in increasing order, it means it is not rotated.
      if (arr[start] <= arr[end]) {
        return start;
      }
  
      let mid = Math.floor((start + end) / 2);
      let prev = (mid + arr.length - 1) % arr.length; // Get the previous element using modular arithmetic.
      let next = (mid + 1) % arr.length; // Get the next element using modular arithmetic.
  
      // Check if the middle element is the minimum element, indicating the rotation point.
      if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
        return mid;
      }
      
      // If the right half of the subarray is sorted, the rotation point is in the left half.
      if (arr[mid] <= arr[end]) {
        end = mid - 1;
      } else {
        // If the left half of the subarray is sorted, the rotation point is in the right half.
        start = mid + 1;
      }
    }
  
    return 0; // If the array is not rotated, the rotation count is 0.
  }

  console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
  console.log(findRotationCount([7, 9, 11, 12, 5])); // Output: 4
  console.log(findRotationCount([7, 9, 11, 12, 15])); // Output: 0
  