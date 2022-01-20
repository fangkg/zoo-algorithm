const maxDepth = function(root) {
    const levelList = [];
    if(root === null) {
        return 0;
    } else {
        loop(root, 1);
        return sortedArrayByBST(levelList);
    }

    function loop(node, level) {
        if(node.left === null && node.right === null) {
            levelList.push(level);
        } else if(node.left !== null) {
            loop(node.left, level + 1);
        } else if(node.right !== null) {
            loop(node.right, level + 1);
        }
    }

    function sort(arr) {
        arr.sort((a, b) => {
            return b - a;
        })
        return arr[0];
    }
}