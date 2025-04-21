function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(); // Nó inicial fictício
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1; // Aponta para o menor nó
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next; // Avança para o próximo nó
  }

  current.next = l1 || l2; // Anexa o restante da lista não vazia
  return dummy.next; // Retorna a lista mesclada
}

// Feedback
console.log("Merge Two Sorted Lists:");
const l1 = ListNode(1, ListNode(2, ListNode(4)));
const l2 = ListNode(1, ListNode(3, ListNode(4)));
const merged = mergeTwoLists(l1, l2);
console.log(printList(merged)); // [1, 1, 2, 3, 4, 4]
