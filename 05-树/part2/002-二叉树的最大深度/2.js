const maxDepth = function(root) {
    if(root === null) {
        return 0;
    } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        const childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
        return childDepth + 1;
    }
}