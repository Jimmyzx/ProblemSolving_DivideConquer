function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === x) {
        return arr[mid];
      } else if (arr[mid] < x) {
        floor = arr[mid];
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return floor;
  }
  
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));   // 8
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20));  // 19
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));   // -1
  