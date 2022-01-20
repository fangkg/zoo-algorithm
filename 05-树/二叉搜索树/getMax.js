function getMax() {
    let currentNode = this.tree;
    while(currentNode.right !== null) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
}