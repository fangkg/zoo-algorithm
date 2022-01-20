const levelOrder = function(root) {
    const levels = [];
    if(!root) {
        return levels;
    }
    const helper = function(node, level) {
        if(levels.length === level) {
            levels.push([]);
        }
        levels[level].push(node.val);
        if(node.left) {
            helper(node.left, level + 1);
        }
        if(node.right) {
            helper(node.right, level + 1);
        }
    }
    helper(root, 0);
    return levels;
}