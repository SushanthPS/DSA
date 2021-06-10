function stringToArray(el) {
    return el.split(" ").map(Number);
}

function possibleSolutions(arr) {
    var ans = [];
    //rows 
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j <= arr[i].length - 3; j++)
            ans.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2]);

    //columns
    for (var i = 0; i < arr[0].length; i++)
        for (var j = 0; j <= arr.length - 3; j++)
            ans.push(arr[j][i] + arr[j + 1][i] + arr[j + 2][i]);


    //primary diagonals
    for (var i = 0; i <= arr.length - 3; i++)
        for (var j = 0; j <= arr[0].length - 3; j++)
            ans.push(arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2]);


    //secondary diagonals
    for (var i = 0; i <= arr.length - 3; i++)
        for (var j = 2; j < arr[0].length; j++)
            ans.push(arr[i][j] + arr[i + 1][j - 1] + arr[i + 2][j - 2]);


    return ans;
}

function count(arr, s) {
    var count = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == s)
            count++;

    return count;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var rcs = newInput[0].split(" ").map(Number);
    var s = rcs[2];
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);

    var solutions = possibleSolutions(arr);
    console.log(count(solutions, s));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 3 6
3 2 1 0 5
2 2 2 7 8
1 5 1 3 5`);
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