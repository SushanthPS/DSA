function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    var stack = [];
    var queue = [];
    for (var i = 1; i <= t; i++) {
        var num = newInput[i].split(" ").map(Number);
        if (num[0] == 1)
            queue.push(num[1]);
        else if (num[0] == 2)
            stack.push(num[1]);
        else if (num[0] == 3) {
            if (queue.length == 0)
                console.log("-1");
            else
                console.log(queue.shift());
        } else if (num[0] == 4) {
            if (stack.length == 0)
                console.log("-1");
            else
                console.log(stack.pop());
        } else if (num[0] == 5) {
            let person = queue.shift();
            stack.push(person);
        }


    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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