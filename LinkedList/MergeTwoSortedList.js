function mergeTwoSortedList(h1, h2) {
  var result = new ListNode(-1);
  var temp = result;
  while (h1 && h2) {
    if (h1.val < h2.val) {
      temp.next = h1;
      h1 = h1.next
    }
    else {
      temp.next = h2;
      h2 = h2.next;
    }
    temp = temp.next;
  }
  if (h1) {
    temp.next = h1;
  }
  if (h2) {
    temp.next = h2;
  }
  return result.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
