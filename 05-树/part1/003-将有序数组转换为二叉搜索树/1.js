const sortedArrayByBST = (arr) => {
    return initTreeNodes(arr, arr.length - 1, 0);
}

const initTreeNodes = (arr, end, start) => {
    if(start <= end) {
        const mid = start + parseInt((end - start) / 2, 10);
        const root = Node(arr[mid]);
        root.left = initTreeNodes(arr, mid - 1, start);
        root.right = initTreeNodes(arr, end, mid + 1);
        return root;
    } else {
        return null;
    }
}