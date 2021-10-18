function maxArea(arr) {
    let max = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let sum = (n - i) * arr[i];
        max = Math.max(sum, max);
    }
    return max;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(maxArea(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    4
    2 3 4 5
    6
    7 5 4 3 6 8`);
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
