function rotate(matrix) {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - 1 - i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][n - 1 - i];
            matrix[n - 1 -j][n - 1 -i] = temp;
        }
    }

    for(let k = 0; k < Math.floor(n/2); k++) {
        const temp = matrix[k];
        matrix[k] = matrix[n - 1 -k];
        matrix[n - 1 - k] = temp;
    }
}