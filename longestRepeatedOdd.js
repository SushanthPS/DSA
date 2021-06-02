function runProgram(input) {

    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);

    var count = 0;
    var max = 0;
    var currentOdd = data[0];

    for (var i = 0; i < data.length; i++) {

        if (data[i] % 2 == 1 && currentOdd == data[i])
            count++;
        else if (data[i] % 2 == 1) {
            max = Math.max(max, count);
            currentOdd = data[i];
            count = 1;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }

    max = Math.max(max, count);
    console.log(max);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`17
1 1 1 1 7 7 7 2 2 2 2 2 2 2 2 3 3`);
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