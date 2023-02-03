/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var detectCycle = function (head) {
  let freq = {};
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (!freq[fast]) {
      freq[fast] += 1;
    } else {
      freq[fast]++;
    }
  }
  return freq;
};
console.log(detectCycle([3, 2, 0, -4]));
