const setZeroes = function(matrix) {
    const len = matrix.length;
    const width = matrix[0].length;
    let flag = false;
    for(let i = 0; i < len; i++) {
        if(!matrix[i][0]) {
            flag = true;
        }
        for(let j = 1; j < width; j++) {
            if(!matrix[i][j]) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = len - 1; i >= 0; i--) {
        for(let j = width - 1; j > 0; j--) {
            if(!matrix[0][j] || !matrix[i][0]) {
                matrix[i][j] = 0;
            }
        }
        if(flag) {
            matrix[i][0] = 0;
        }
    }
}