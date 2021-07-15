function findCount(arr1, arr2) {
    var count = 0;
    var n = arr1.length;
    var m = arr2.length;

    var left = 0;
    var right = m - 1;
    while (left < n && right >= 0) {
        if (arr1[left] == arr2[right]) {
            count++;
            left++;
            right--;
        } else if (arr1[left] > arr2[right])
            right--;
        else
            left++;
    }
    return count;

}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 3; i += 3) {
        var arr1 = newInput[i + 1].split(" ").map(Number);
        var arr2 = newInput[i + 2].split(" ").map(Number);
        console.log(findCount(arr1, arr2));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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