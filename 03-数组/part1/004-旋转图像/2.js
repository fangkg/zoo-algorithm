function rotate(matrix) {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let k = 0; k < n; k++) {
        for(let l = 0; l < Math.floor(n/2); l++) {
            const temp = matrix[k][l];
            matrix[k][l] = matrix[k][n-1-l];
            matrix[k][n-1-l] = temp;
        }
    }
}