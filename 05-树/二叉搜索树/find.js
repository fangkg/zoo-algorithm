function find(data) {
    let node = this.tree;
    while(node !== null) {
        if(node.data === data) {
            return node;
        } else if(data < node.data) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
}