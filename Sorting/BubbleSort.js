function bubbleSort(nums) {
  for (var i=0; i<nums.length-1; i++) {
    for (var j=0; j<nums.length-i; j++) {
      if (nums[j] > nums[j+1]) {
        var temp = nums[j+1];
        nums[j+1] = nums[j];
        nums[j] = temp;
      }
    }
  }
}
