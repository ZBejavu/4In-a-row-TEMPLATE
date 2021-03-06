function checkDiagonal(e) {
    let winner;

    for (let i = 0; i <= 3; i++) {
        for (let j = 5; j >= 0; j--) {
            if (e[i][j] !== 0 &&
                e[i][j] === e[i+1][j-1] &&
                e[i][j] === e[i+2][j-2] &&
                e[i][j] === e[i+3][j-3])
            {
                winner = e[i][j]
                return winner;
            }
        }
    } 

    for (let i = 0; i< 4; i++) {
        for(let j = 2; j> -1; j--) {
            if(
                e[i][j] !== 0 &&
                e[i][j] === e[i+1][j+1] &&
                e[i][j] === e[i+2][j+2] &&
                e[i][j] === e[i+3][j+3]
            ){
               console.log(e[i][j],e[i+1][j+1],e[i+2][j+2],e[i+3][j+3])
                winner = e[i][j];
                return winner;
            }
        }
    }
    return winner;
}

export default checkDiagonal;