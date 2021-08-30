let flag;

function subsequence(arr, l, h, ans) {
    if (l <= h + 1 && ans.length != 0) {
        let temp = ans.trim().split(" ").map(Number);
        if (temp[0] % 2 == 0 && temp[temp.length - 1] % 2 == 0) {
            flag = true;
            return;
        }
    }
    for (let i = l; i <= h; i++) {
        subsequence(arr, i + 1, h, ans + arr[i] + " ")
    }

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        flag = false;
        subsequence(arr, 0, arr.length - 1, "");
        if (flag)
            console.log("yes");
        else
            console.log("no");
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    4 3 2 1 5
    2
    1 3`);
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