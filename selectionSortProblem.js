function selectionSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        var min = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                minIndex = j;
                min = arr[j];
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp;
    }
    return arr.join(" ");
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var arr = newInput[1].split(" ").map(Number);
    console.log(selectionSort(arr));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
3 5 0 9 8`);
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