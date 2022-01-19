function ListNode(val) {
    this.val = val;
    this.next = null;
}

const addTwoNumbers = function(l1, l2) {
    const sumListNode = new ListNode(0);
    let pointer1 = l1;
    let pointer2 = l2;
    let current = sumListNode;
    let carry = 0;
    while(pointer1 || pointer2) {
        const num1 = pointer1 ? pointer1.val : 0;
        const num2 = pointer2 ? pointer2.val : 0;
        const sum = carry + num1 + num2;
        carry = Math.floor(sum/10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if(pointer1) {
            pointer1 = pointer1.next;
        }

        if(pointer2) {
            pointer2 = pointer2.next;
        }
    }

    if(carry > 0) {
        current.next = new ListNode(carry);
    }

    return sumListNode.next;
}