function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const serialize = function(root) {
    const result = [];
    function traverseNode(node) {
        if(node === null) {
            result.push(null);
        } else {
            result.push(node.val);
            traverseNode(node.left);
            traverseNode(node.right);
        }
    }

    traverseNode(root);
    return result;
}

const deserialize = function(data) {
    const length = data.length;
    if(length === 0) {
        return null;
    }
    let i = 0;
    function structure() {
        if(i >= length) {
            return null;
        }
        const val = data[i];
        i++;
        if(val === null) {
            return null;
        }
        const node = new TreeNode(val);
        node.left = structure();
        node.right = structure();
        return node;
    }

    return structure();
}