function postTraversal(node) {
    if(node === null) {
        return;
    }
    postTraversal(node.left);
    postTraversal(node.right);
    console.log(node.data);
}