function findMinCost(arr) {
    let minCount = Number.MAX_SAFE_INTEGER;
    let count;
    let ans = arr[0];
    let temp = arr.slice(0);
    let cost = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < cost.length; j++) {
            count += Math.floor(arr[i] / cost[j]);
            arr[i] = arr[i] % cost[j];
        }
        if (count < minCount) {
            minCount = count;
            ans = temp[i];
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);
        console.log(findMinCost(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    11 50 51 1000 2000
    3
    200 13 5000`);
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
