const isSymmetric = function(root) {
    if(!root) return true;
    const queue = [root.left, root.right];
    while(queue.length) {
        let len = queue.length;
        const level = [];
        while(len) {
            const pop = queue.shift();
            level.push(pop);
            if(pop) {
                queue.push(pop.left);
                queue.push(pop.right);
            }
            len--;
        }

        for(let i = 0, l = level.length; i < l/2; i++) {
            if(level[i] === null && level[l - i - 1] !== null) return false;
            if(level[i] !== null && level[l - i - 1] === null) return false;
            if(level[i] !== null && level[l - i - 1] !== null) {
                if(level[i].val !== level[l - i - 1].val) {
                    return false;
                }
            }
        }
    }

    return true;
}