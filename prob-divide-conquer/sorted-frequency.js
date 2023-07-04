function sortedFrequency(arr, target) {
    function findFirstOccurrence(arr, target) {
      let start = 0;
      let end = arr.length - 1;
      let result = -1;
  
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
  
        if (arr[mid] === target) {
          result = mid;
          end = mid - 1;
        } else if (arr[mid] < target) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
  
      return result;
    }
  
    function findLastOccurrence(arr, target) {
      let start = 0;
      let end = arr.length - 1;
      let result = -1;
  
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
  
        if (arr[mid] === target) {
          result = mid;
          start = mid + 1;
        } else if (arr[mid] < target) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
  
      return result;
    }
  
    const firstIndex = findFirstOccurrence(arr, target);
    const lastIndex = findLastOccurrence(arr, target);
  
    if (firstIndex === -1) {
      return -1;
    }
  
    return lastIndex - firstIndex + 1;
  }
  
  module.exports = sortedFrequency;

    sortedFrequency([1,1,2,2,2,2,3],2) // 4
    sortedFrequency([1,1,2,2,2,2,3],3) // 1
    sortedFrequency([1,1,2,2,2,2,3],1) // 2
    sortedFrequency([1,1,2,2,2,2,3],4) // -1