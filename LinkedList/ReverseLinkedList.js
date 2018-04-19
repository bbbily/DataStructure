function reverseByLoop(head) {
  if (head === null || head.next === null) {
    return head;
  }
  var pre = null;
  var next = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
