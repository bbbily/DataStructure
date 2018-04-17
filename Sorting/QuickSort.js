function partition(nums, low, high) {
  var store = low;
  var pivot = nums[low];
  for (var i=low+1; i<=high; i++) {
    if (nums[i] < pivot) {
      store++;
      var temp = nums[i];
      nums[i] = nums[store];
      nums[store] = nums[i];
    }
  }
  nums[low] = nums[store];
  nums[store] = pivot;
  return store;
}

function sort(nums, low, high) {
  if (low < high) {
    var pivotIndex = partition(nums, low, high);
    sort(nums, low, pivotIndex-1);
    sort(nums, pivotIndex+1, high);
  }
}

function quickSort(nums) {
  sort(nums, 0, nums.length-1);
}
