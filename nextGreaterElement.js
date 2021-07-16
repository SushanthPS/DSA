function nextGreaterElement(arr) {
    var ans = [];
    var stack = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        var big = -1;
        while (stack.length != 0) {
            if (arr[i] < stack[stack.length - 1]) {
                big = stack[stack.length - 1];
                break;
            } else
                stack.pop();
        }
        stack.push(arr[i]);
        ans.push(big);
    }
    return ans.reverse().join(" ");
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(nextGreaterElement(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
4
1 3 2 4`);
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