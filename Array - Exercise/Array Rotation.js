arrayRotation = (array = [], n = 0) => {
    for (let i = 0; i < n; i++) {
        let hey = array.shift();
        array.push(hey);
    }
    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);

arrayRotation2 = (array = [], n = 0) => {
    array.push(...array.splice(0, n % array.length));
    console.log(array.join(' '));
}

arrayRotation2([2, 4, 15, 31], 5);