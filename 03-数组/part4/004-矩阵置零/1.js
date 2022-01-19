const setZeroes = function(matrix) {
    const len = matrix.length;
    const width = matrix[0].length;
    const vertical = [];
    const horizontal = [];
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < width; j++) {
            if(!matrix[i][j]) {
                vertical.push(j);
                horizontal.push(i);
            }
        }
    }
    for(let i = 0; i < len; i++) {
        if(horizontal.indexOf(i) > -1) {
            matrix[i].fill(0, 0, width);
        }
        for(let j = 0; j < vertical.length; j++) {
            matrix[i][vertical[j]] = 0;
        }
    }
}