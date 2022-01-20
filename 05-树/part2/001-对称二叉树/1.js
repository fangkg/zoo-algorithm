const isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    return isSameTree(root.left, root.right);
}

const isSameTree = (r, l) => {
    if(r === null) return l === null;
    if(l === null) return r === null;
    if(r.val !== l.val) return false;
    return isSameTree(r.left, l.right) && isSameTree(r.right && l.left);
}