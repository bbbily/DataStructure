function theKthNode(head, k) {
  var slow = head;
  var fast = head;
  for (var i=k; i>0 && fast.next; i--) {
    fast = fast.next;
  }
  if (i > 0) {
    return null;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
