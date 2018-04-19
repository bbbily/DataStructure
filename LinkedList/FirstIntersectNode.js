function firstIntersectNode(h1, h2) {
  var len1 = listLength(h1);
  var len2 = listLength(h2);
  if (len1 > len2) {
    for (var i=0; i<len1-len2; i++) {
      h1 = h1.next;
    }
  }
  else {
    for (var j=0; j<len2-len1; j++) {
      h2 = h2.next;
    }
  }
  while (h1 !== h2 && h1 !== null) {
    h1 = h1.next;
    h2 = h2.next;
  }
  return h1;
}

function listLength(head) {
  var length = 0;
  while(head) {
    length++;
    head = head.next;
  }
  return length;
}
