// iterative
function reversePrintList(head) {
  var stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  while (stack.length) {
    console.log(stack.pop().val);
  }
}

//recursive
function reversePrintList(head) {
  if (head === null) return null;
  reversePrintList(head.next);
  console.log(head.val);
}
