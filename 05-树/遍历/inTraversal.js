function inTraversal(node) {
    if(node === null) {
        return;
    }
    inTraversal(node.left);
    console.log(node.data);
    inTraversal(node.right);
}