function selectionSort(nums) {
  for (var i=0; i<nums.length-1; i++) {
    var min = nums[i];
    var index = i;
    for (var j=i+1; j<nums.length; j++) {
      if (min > nums[j]) {
        min = nums[j];
        index = j;
      }
    }
    nums[index] = nums[i];
    nums[i] = min;
  }
}
