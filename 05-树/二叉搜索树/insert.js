function insert(data) {
    const n = new Node(data);
    if(this.tree === null) {
        this.tree = n;
        return;
    }
    let node = this.tree;
    while(node !== null) {
        if(data > node.data) {
            if(node.right === null) {
                node.right = n;
                return
            }
        } else {
            if(data < node.data) {
                if(node.left === null) {
                    node.left = n;
                    return;
                }
                node = node.left;
            }
        }
    }
}