function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const serialize = function(root) {
    if(!root) {
        return [];
    }
    const result = [];
    const queue = [];
    queue.push(root);
    let node;
    while(queue.length) {
        node = queue.shift();
        result.push(node ? node.val : null);
        if(node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return result;
}

const deserialize = function(data) {
    const length = data.length;
    if(length === 0) {
        return null;
    }
    const root = new TreeNode(data.shift());
    const queue = [root];
    while(queue.length) {
        const node = queue.shift();
        if(data.length === 0) {
            break;
        }
        const leftVal = data.shift();
        if(leftVal === null) {
            node.left = null;
        } else {
            node.left = new TreeNode(leftVal);
            queue.push(node.left);
        }
        if(data.length === 0) {
            break;
        }
        const rightVal = data.shift();
        if(rightVal === null) {
            node.right = null;
        } else {
            node.right = new TreeNode(rightVal);
            queue.push(node.right);
        }
    }

    return root;
}