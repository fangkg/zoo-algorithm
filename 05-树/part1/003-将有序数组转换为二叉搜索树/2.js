const sortedArrayToBST = (arr) => {
    if(!arr.length) {
        return null;
    }
    const queue = [];
    initNodeValueArr(arr, 0, arr.length, queue);
    const root = new initTreeNodes(queue[0]);
    for(let i = 1; i < queue.length; i++) {
        insertNode(root, queue[i]);
    }
    return root;
}

const insertNode = (node, value) => {
    if(value < node.val) {
        if(!node.left) {
            node.left = new initTreeNodes(value);
        } else {
            insertNode(node.left, value);
        }
    } else if(!node.right) {
        node.right = new initTreeNodes(value);
    } else {
        insertNode(node.right, value);
    }
}

const initNodeValueArr = (arr, start, end, queue) => {
    const mid = start + parseInt((end - start)/2, 10);
    queue.push(arr[mid]);
    if(start < mid) {
        initNodeValueArr(arr, start, mid, queue);
    }
    if(mid + 1 < end) {
        initNodeValueArr(arr, mid + 1, end, queue);
    }
}