function isListNodeIntersect(h1, h2) {
  if (h1 === null || h2 === null) return false;
  while (h1.next) {
    h1 = h1.next;
  }
  while (h2.next) {
    h2 = h2.next;
  }
  if (h1 === h2) {
    return true;
  }
  return false;
}
