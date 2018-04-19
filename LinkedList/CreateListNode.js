function createListNode(nums) {
  var head = new ListNode(-1);
  var temp = head;
  for (var i=0; i<nums.length; i++) {
    temp.next = new ListNode(nums[i]);
    temp = temp.next;
  }
  return head.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
