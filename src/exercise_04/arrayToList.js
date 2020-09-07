export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const head = {};
  let cur = null;
  let pre = null;
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      head.value = array[i];
      head.next = cur;
      pre = head;
    } else {
      cur = {};
      cur.value = array[i];
      cur.next = null;
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
}
