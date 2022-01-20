const levelOrder = function(root) {
    const levels = [];
    if(!root) {
        return levels;
    }
    let level = 0;
    const queue = [root];
    while(queue.length) {
        levels.push([]);
        const levelLength = queue.length;
        for(let i = 0; i < levelLength; i++) {
            const node = queue.shift();
            levels[level].push(node.val);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        level++;
    }
    return levels;
}