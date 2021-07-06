function sumOfDiagonals(arr, n) {

    var ans = new Array(n);

    for (var i = 0; i < n; i++)
        ans[i] = new Array(n);


    var top = 0;
    var down = n - 1;
    var left = 0;
    var right = n - 1;

    var count = 0;

    while (count < n * n) {

        for (var i = left; i <= right && count < n * n; i++) {
            ans[top][i] = arr[count];
            count++;
        }
        top++;


        for (var i = top; i <= down && count < n * n; i++) {
            ans[i][right] = arr[count];
            count++;
        }
        right--;


        for (var i = right; i >= left && count < n * n; i--) {
            ans[down][i] = arr[count];
            count++;
        }
        down--;

        for (var i = down; i >= top && count < n * n; i--) {
            ans[i][left] = arr[count];
            count++;
        }
        left++;

    }


    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += ans[i][i];
    }


    var i = 0;
    var j = n - 1;
    while (i < n) {
        sum += ans[i][j];
        i++;
        j--;
    }

    if (n % 2 == 1) {
        n = Math.floor(n / 2);
        sum -= ans[n][n];
    }
    return sum;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var n = Number(newInput[i]);
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(sumOfDiagonals(arr, n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
3
1 2 3 4 5 6 7 8 9`);
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