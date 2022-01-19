class Node {
    constructor(el) {
        this.el = el;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
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

    insert(el, item) {
        const newNode = new Node(el);
        const currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        currentNode.next.prev = newNode;
    }

    remove(item) {
        const node = this.find(item);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
    }
}