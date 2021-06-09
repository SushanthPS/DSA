function stringToArray(el) {
    return el.split(" ");
}

function findAllSolutions(arr) {
    var sol = [];
    for (var i = 0; i < arr.length; i++)
        sol.push([arr[i][0], arr[i][1], arr[i][2]]);

    for (var j = 0; j < arr.length; j++)
        sol.push([arr[0][j], arr[1][j], arr[2][j]]);

    sol.push([arr[0][0], arr[1][1], arr[2][2]]);
    sol.push([arr[0][2], arr[1][1], arr[2][0]]);

    return sol;
}

function whoWon(arr) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2])
            return arr[i][0];

    return "Tie";
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput.map(stringToArray);
    console.log(whoWon(findAllSolutions(arr)));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`x o o
o o x
o x o`);
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