function preTraversal(node) {
    if(node === null) {
        return;
    }
    console.log(node.data);
    preTraversal(node.left);
    preTraversal(node.right);
}