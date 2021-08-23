function findNum(arr) {
    let obj = [];
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined)
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;
    }
    for (let i in obj)
        if (obj[i] == 1)
            return i

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(findNum(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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