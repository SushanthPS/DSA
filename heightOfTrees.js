function maxHeight(arr) {
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > current) {
                current = arr[j];
                count++;
            }
        }
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(maxHeight(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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
