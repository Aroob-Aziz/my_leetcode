// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var getDecimalValue = function (head) {
  if (!head) {
    return 0;
  }
  let binaryStr = "";

  while (head) {
    binaryStr += head.val;
    head = head.next;
  }

  return parseInt(binaryStr, 2);
};

console.log(
  getDecimalValue(new ListNode("1", new ListNode("0", new ListNode("1"))))
);