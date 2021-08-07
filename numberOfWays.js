function numberOfWays(n) {
    if (n == 0 || n == 1)
        return 1;
    else if (n == 2)
        return 2;
    else
        return numberOfWays(n - 3) + numberOfWays(n - 2) + numberOfWays(n - 1)
}

function runProgram(input) {
    let n = Number(input);
    console.log(numberOfWays(n));
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