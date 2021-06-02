function runProgram(input) {

    var newInput = input.split("\n");
    var t = Number(newInput[0]);

    for (var i = 1; i < t * 2; i += 2) {

        var newInput2 = newInput[i].split(" ").map(Number);
        var k = newInput2[1];
        var arr = newInput[i + 1].split(" ").map(Number);

        k = k % arr.length; //removing extra rotations

        var a = arr.slice(arr.length - k, arr.length);
        var b = arr.slice(0, arr.length - k);
        var ans = (a.join(" ") + " " + b.join(" "));
        console.log(ans.trim());

    }
}
/*
       1 2 3 4 5 6 7  (4 rotations) 
    == 4 5 6 7 1 2 3 
    TO MAKE 4 ROTATIONS TO THE RIGHT, WE NEED TO MOVE THE LAST 4 ELEMENTS TO THE FIRST USING SLICE OPERATION
*/

if (process.env.USERNAME === "getsu") {
    runProgram(`3
3 1
1 2 3
7 4
1 2 3 4 5 6 7
2 3
1 2`);
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