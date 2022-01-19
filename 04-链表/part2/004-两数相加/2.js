function ListNode(val) {
    this.val = val;
    this.next = null;
}

const listNodeToNum = function(listNode) {
    let numString = "";
    let currentNode = listNode;
    while(currentNode) {
        numString = currentNode.val + numString;
        currentNode = currentNode.next;
    }
    return BigInt(numString);
}

const numToListNode = function(num) {
    let listNode = null;
    const numString = num.toString();
    for(let i = 0; i < numString.length; i++) {
        const newNode = new ListNode(numString[i]);
        newNode.next = listNode;
        listNode = newNode;
    }
    return listNode;
}

const addTwoNumbers = function(l1, l2) {
    return numToListNode(listNodeToNum(l1) + listNodeToNum(l2));
}