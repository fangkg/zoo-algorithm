const getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    let pA = headA;
    let pB = headB;
    let lenA = 0;
    let lenB = 0;
    while(pA !== null) {
        lenA++;
        pA = pA.next;
    }
    while(pB !== null) {
        lenB++;
        pB = pB.next;
    }

    let lenDiff = lenA - lenB;
    pA = headA;
    pB = headB;
    if(lenDiff > 0) {
        while(lenDiff !== 0) {
            pA = pA.next;
            lenDiff--;
        }
    } else {
        while(lenDiff !== 0) {
            pB = pB.next;
            lenDiff++;
        }
    }

    while(pA !== null) {
        if(pA === pB) {
            return pA;
        }
        pA = pA.next;
        pB = pB.next;
    }

    return null;
}