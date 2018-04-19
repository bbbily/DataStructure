function deleteRandomNode(head, deleteNode) {
  if (head === null || deleteNode === null) {
    return null;
  }
  if (head === deleteNode) {
    head = null;
    deleteNode = null;
    return null;
  }
  if (deleteNode.next !== null) {
    deleteNode.val = deleteNode.next.val;
    deleteNode.next = deleteNode.next.next;
    return head;
  }
  else {
    var temp = head;
    while (temp.next !== deleteNode) {
      temp = temp.next;
    }
    temp.next = null;
    deleteNode = null;
    return head;
  }
}
