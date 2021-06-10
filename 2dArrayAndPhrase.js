function stringToArray(el) {
    return el.split("");
}

function allPossibleSolutions(arr) {
    var ans = [];
    //all rows
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j <= arr[i].length - 4; j++)
            ans.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3]);

    //all columns
    for (var i = 0; i < arr[0].length; i++)
        for (var j = 0; j <= arr.length - 4; j++)
            ans.push(arr[j][i] + arr[j + 1][i] + arr[j + 2][i] + arr[j + 3][i]);

    //all primary diagonals
    for (var i = 0; i <= arr.length - 4; i++)
        for (var j = 0; j <= arr[i].length - 4; j++)
            ans.push(arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] + arr[i + 3][j + 3]);

    //all secondary diagonals (bottom -> top and left -> right)
    for (var i = arr.length - 1; i >= 3; i--)
        for (var j = 0; j <= arr[i].length - 4; j++)
            ans.push(arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] + arr[i - 3][j + 3]);


    return ans;

}

function countSolutions(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == "saba")
            count++;

    return count;

}


function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);
    var solutions = allPossibleSolutions(arr);
    console.log(countSolutions(solutions));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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