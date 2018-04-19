function isIntersectWithLoop(h1, h2) {
  var cn1 = circleNode(h1);
  var cn2 = circleNode(h2);
  if (cn1 === null || cn2 === null) return false;
  if (cn1 === cn2) return true;
  var temp = cn2.next;
  while (temp !== cn2) {
    if (temp === cn1) return true;
    temp = temp.next;
  }
  return false;
}

function circleNode(head) {
  if (head === null) return null;
  var slow = head;
  var fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return slow;
    }
  }
  return null;
}
