/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let len = 1;
  let tail = head;
  let newhead = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  k = k % len;

  for (let i = 0; i < len - k; i++) {
    tail = tail.next;
  }
  newhead = tail.next;
  tail.next = null;

  return newhead;
};
