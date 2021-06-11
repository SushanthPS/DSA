function stringToArray(el) {
    return el.split(" ").map(Number);
}

function arraySumCount(arr, s) {
    var count = 0;
    var n = arr.length;
    var m = arr[0].length;

    for (var i = 0; i < n; i++)
        for (var j = 0; j < m; j++) {
            //horizontal 
            if (m - j >= 3)
                if ((arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) == s)
                    count++;

            //vertical
            if (n - i >= 3)
                if ((arr[i][j] + arr[i + 1][j] + arr[i + 2][j]) == s)
                    count++;

            //primary diagonal
            if ((m - j >= 3) && (n - i >= 3))
                if ((arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2]) == s)
                    count++;

            //secondary diagonal
            if (i >= 2 && m - j >= 3)
                if ((arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2]) == s)
                    count++;

        }

    return count;
}


function runProgram(input) {
    var newInput = input.split("\n");
    var rcs = newInput[0].split(" ").map(Number);
    var s = rcs[2];
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);

    console.log(arraySumCount(arr, s));

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