function insertionSort(nums) {
  for (var i=1; i<nums.length; i++) {
    var temp = nums[i];
    for (var j=i; j>=0; j--) {
      if (temp < nums[j-1]) {
        nums[j] = nums[j-1];
      }
      else {
        nums[j] = temp;
        break;
      }
    }
  }
}
