const isValidUnique = function(board) {
    let row = 0;
    let col = 0;
    let sqre = 0;
    for(let r = 0; r < 9; r++) {
        row = col = sqre = 0;
        for(let c= 0; c < 9; c++) {
            const rowEle = board[r][c];
            const colEle = board[c][r];
            const R = Math.floor(r/3) * 3 + Math.floor(c/3);
            const C = Math.floor(3 * (r%3) + c % 3);
            const sqreEle = board[R][C];
            if(!isNaN(rowEle)) {
                row = ((row >> rowEle) & 1) ? -1 : row ^ (1 << rowEle);
            }  
            if(!isNaN(colEle)) {
                col = ((col >> colEle) & 1) === 1 ? -1 : col ^ (1 << colEle);
            }
            if(!isNaN(sqreEle)) {
                sqre = ((sqre >> sqreEle) & 1) === 1 ? -1 : sqre ^ (1 << sqreEle);
            }
            if(row === -1 || col === -1 || sqre === -1) {
                return false;
            }
        }
    }

    return true;
}