const sortList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    let cur = head;
    let index = 0;
    const arr = [];
    while(cur !== null) {
        arr[index] = cur.val;
        cur = cur.next;
        index++;
    }
    arr.sort((a, b) => a - b);
    cur = head;
    index = 0;
    while(cur !== null) {
        cur.val = arr[index];
        index++;
        cur = cur.next;
    }
    return head;
}