function reverseBetween(head, m, n) {
  if (head === null || head.next === null) return head;
  var result = new ListNode(-1);
  var pre = result;
  result.next = head;
  for (var i=0; i<m-1; i++) {
    pre = pre.next;
  }
  var start = pre.next;
  var then = start.next;
  for (var j=0; j<n-m; j++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }
  return result.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
