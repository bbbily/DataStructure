function findLoopPort(head) {
  if (head === null) return false;
  var slow = head;
  var fast = head;
  var circleNode = null;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      circleNode = slow;
      break;
    }
  }
  fast = head;
  while (circleNode) {
    if (slow === fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return false;
}
