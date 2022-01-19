class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        let currentNode = this.head;
        while(currentNode && currentNode.el !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findPrev(item) {
        let node = this.head;
        while(node.next !== null && node.next.el !== item) {
            node = node.next;
        }
        return node;
    }

    insert(el, item) {
        const newNode = new Node(el);
        const currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    remove() {
        const prevNode = this.findPrev(item);
        if(prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
}