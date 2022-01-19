const isValidUniqueNum = function(board) {
    for(let i = 0; i < 9; i++) {
        const rowMap = {};
        const colMap = {};
        const sqreMap = {};

        for(let j = 0; j < 9; j++) {
            const rowEle = board[i][j];
            const colEle = board[j][i];

            if(rowEle !== '.') {
                if(rowMap[rowEle]) {
                    return false;
                }
                rowMap[rowEle] = 1;
            }

            if(colEle !== '.') {
                if(colMap[colEle]) {
                    return false
                }
                colMap[colEle] = 1;
            }

            const R = Math.floor(i/3) * 3 + Math.floor(j/3);
            const C = Math.floor(3 * (i%3) + j%3);
            const sqreEle = board[R][C];
            if(sqreEle !== '.') {
                if(sqreMap[sqreEle]) {
                    return false;
                }
                sqreMap[sqreEle] = 1;
            }
        }
    }

    return true;
}