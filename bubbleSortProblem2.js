function runProgram(input) {
    var input = input.split("\n");
    var arr = input[1].split(" ").map(Number);
    console.log(arr.sort(compare).join(" "));

}

var compare = function (a, b) {
    return a - b;
}

if (process.env.USERNAME === "getsu") {
    runProgram(`5
3 5 0 9 8`);
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