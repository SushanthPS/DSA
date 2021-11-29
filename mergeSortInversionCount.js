function mergeSort(arr, l, r) {
    let count = 0;
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        count += mergeSort(arr, l, mid);
        count += mergeSort(arr, mid + 1, r);
        count += merge(arr, l, mid, r);
    }
    return count;
}

function merge(arr, l, mid, r) {
    let L = arr.slice(l, mid + 1);
    let R = arr.slice(mid + 1, r + 1);

    let n1 = L.length;
    let n2 = R.length;

    let i = 0;
    let j = 0;
    let k = l;
    let swap = 0;

    while (i < n1 && j < n2) {
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
            swap += mid + 1 - (l + i);
            //finding number of elements in left array that will have to be inverted
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        k++;
        i++;
    }
    while (j < n2) {
        k++;
        j++;
    }
    return swap;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    let n = Number(newInput[0].trim());
    console.log(mergeSort(arr, 0, n - 1));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    8 4 2 1`);
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
