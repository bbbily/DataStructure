function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  var mid = Math.floor(nums.length / 2);
  var left = nums.slice(0, mid);
  var right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  if (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    }
    else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
