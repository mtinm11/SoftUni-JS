
maxNumber = (arr = []) => {
    let output = [arr[arr.length - 1]];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > output[0]) {
            output.unshift(arr[i]);
        }
    }

    console.log(output.join(' '));
};