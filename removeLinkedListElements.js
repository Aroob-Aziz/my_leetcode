var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) {
    return head;
  }

  let pointer = head;
  let prev = head;
  head = head.next;

  while (head) {
    if (head.val === val) {
      prev.next = head.next;
      head = head.next;
      continue;
    }
    prev = prev.next;
    head = head.next;
  }

  return pointer;
};
