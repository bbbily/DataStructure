function theMiddleNode(head) {
  if (head === null) return null;
  var slow = head;
  var fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
