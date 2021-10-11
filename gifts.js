let ans = [];

function gift(arr) {
    let maxCount = 0;
    let obj = {};

    // 1) 1 2 1 3 2 7 4 2
    // 2) 1 2 1 3 4
    // 3) 1 2 2 1

    for (let i = 0, j = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (obj[ele] != undefined) {
            j = Math.max(obj[ele], j);
        }

        maxCount = Math.max(maxCount, i - j + 1);

        obj[ele] = i + 1;
    }

    return maxCount;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        ans.push(gift(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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
