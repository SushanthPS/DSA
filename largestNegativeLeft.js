function largestNegativeLeft(arr, k) {
    var stack = [];
    var result = "";
    var largestNegative;

    for (var i = 0; i < arr.length; i++) {
        if (stack.length == 0)
            largestNegative = 0;
        else {
            largestNegative = stack[0];
            for (var j = 1; j < stack.length; j++) {
                if (stack[j] > largestNegative) {
                    largestNegative = stack[j];
                }
            }
        }
        result += largestNegative + " ";
        if (arr[i] < 0)
            stack.push(arr[i]);
    }
    return result.trim();
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(largestNegativeLeft(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
5
1 2 -1 3 4`);
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