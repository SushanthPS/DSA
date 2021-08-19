let ans = 0;

function isQueenSafe(chess, row, col) {
    //vertical
    for (let i = row - 1, j = col; i >= 0; i--) {
        if (chess[i][j] == 1)
            return false;
    }

    //left top diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chess[i][j] == 1)
            return false;
    }

    //right top diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < 10; i--, j++) {
        if (chess[i][j] == 1)
            return false;
    }

    return true;
}

function nQueen(chess, row) {
    if (row >= chess.length) {
        ans++;
    }
    for (let col = 0; col < chess.length; col++) {
        if (isQueenSafe(chess, row, col)) {
            chess[row][col] = 1;
            nQueen(chess, row + 1)
            chess[row][col] = 0
        }
    }
}

function runProgram(input) {
    let n = Number(input);
    let chess = [];
    for (let i = 0; i < n; i++) {
        let temp = new Array(n).fill(0);
        chess.push(temp);
    }
    nQueen(chess, 0);
    console.log(ans);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}