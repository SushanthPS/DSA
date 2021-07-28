function isItBalanced(arr) {
    let stack = [];
    let obj = {
        '}': '{',
        ')': '(',
        ']': '['
    };


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '{' || arr[i] == '(' || arr[i] == '[')
            stack.push(arr[i]);
        else {
            if (obj[arr[i]] == stack[stack.length - 1])
                stack.pop();
            else
                return "not balanced";

        }
    }
    if (stack.length == 0)
        return "balanced"
    else
        return "not balanced";
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var test = 1; test <= t; test++) {
        var arr = newInput[test].split("");
        console.log(isItBalanced(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
{([])}
()
([]`);
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