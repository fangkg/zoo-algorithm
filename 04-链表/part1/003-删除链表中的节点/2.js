const deleteNode = function(node) {
    Object.assign(node, node.next);
}