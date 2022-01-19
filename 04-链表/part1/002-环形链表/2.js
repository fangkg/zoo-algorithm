const hasCycle = function(head) {
    if(!head) return false;
    const newData = new Map();
    while(head) {
        if(newData.has(head)) return true;
        newData.set(head, 1);
        head = head.next;
    }
    return false;
}