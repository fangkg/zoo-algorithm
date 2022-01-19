const hasCycle = function(head) {
    if(!head) return false;
    const newData = Symbol('');
    while(head) {
        if(head.val === newData) return true;
        head.val = newData;
        head = head.next;
    }
    return false;
}