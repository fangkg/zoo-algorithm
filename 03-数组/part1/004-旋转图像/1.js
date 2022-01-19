function rotate(matrix) {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n - i -1; j++) {
            const a = [matrix[i][j], matrix[j][n - 1 - i], matrix[n - 1 - i][n - 1 - j]]
            matrix[i][j] = a[3];
            matrix[j][n - 1 - i] =a[0];
            matrix[n - 1 - i][n - 1 - j] = a[1];
            matrix[n - 1 - j][i] = a[2];
        }
    }
}