function canBeMadePalindrome(s) {
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (obj[char] == undefined)
            obj[char] = 1;
        else
            obj[char]++;
    }

    var oddCount = 0;
    for (var i in obj) {
        if (obj[i] % 2 == 1)
            oddCount++;
        if (oddCount > 1)
            return "Not Possible!";
    }

    return "Possible!";
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var s = newInput[i + 1];
        console.log(canBeMadePalindrome(s));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
6
aabbcc
5
aabcd`);
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