function getMin() {
    let currentNode = this.three;
    while(currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode.data;
}