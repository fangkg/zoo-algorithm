function remove(data) {
    let node = this.tree;
    let parentNode;
    while(node !== null && node.data !== data) {
        parentNode = node;
        if(data > node.data) {
            node = node.right;
        } else {
            node = node.left;
        }
    }

    if(node === null) {
        return;
    }

    if(node.left !== null && node.right !== null) {
        let minNodeParent = node;
        let minNode = minNodeParent.right;
        while(minNodeParent.left !== null) {
            minNodeParent = minNode;
            minNode = minNode.left;
        }
        node.data = minNode.data;
        node = minNode;
        parentNode = minNodeParent;
    }

    let childNode = null;
    if(node.left !== null) {
        childNode = node.left;
    } else if(node.right !== null) {
        childNode = node.right;
    }

    if(parentNode === null) {
        this.tree = childNode;
    } else if(parentNode.left === node) {
        parentNode.left = childNode;
    } else {
        parentNode.right = childNode;
    }
}