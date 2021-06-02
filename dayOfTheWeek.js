function findCount(day) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (var i = 0; i < days.length; i++)
        if (days[i] == day)
            return i;

}

function findDay(n, count) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (n == 0)
        return 0;

    while (n != 0) {
        n--;
        count++;
        if (count == 7)
            count = 0;
        if (n == 0)
            return days[count];
    }

}

function runProgram(input) {
    var newInput = input.split("\n");
    var day = newInput[0];
    var n = Number(newInput[1]);

    n = n % 7; //omitting useless rotations
    var count = findCount(day);

    if (findDay(n, count) == 0)
        console.log(day);
    else
        console.log(findDay(n, count));


}
if (process.env.USERNAME === "getsu") {
    runProgram(`Wednesday
8`);
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