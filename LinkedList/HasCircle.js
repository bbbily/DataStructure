function hasCircle(head) {
  if (head === null) return false;
  var slow = head;
  var fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
