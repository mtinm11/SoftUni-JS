addAndSubtract = (array = []) => {
    let [oldSum, newSum] = [0, 0];
    for (let i = 0; i < array.length; i++) {
        oldSum += array[i];
        newSum += (array[i] = array[i] + (array[i] % 2 === 0 ? i : -i));
    }

    console.log(array);
    console.log(oldSum);
    console.log(newSum);
};

addAndSubtract([5, 15, 23, 56, 35]);

addAndSubtract2 = (array = []) => {
    let oldSum = 0, newSum = 0;
    for (let i = 0; i < array.length; i++) {
        oldSum += array[i];
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }

        newSum += array[i];
    }

    console.log(array);
    console.log(oldSum);
    console.log(newSum);
};

addAndSubtract2([5, 15, 23, 56, 35]);

addAndSubtract3 = (array = []) => {
    let oldSum = array.reduce((sum, el) => sum + el, 0);
    array = array.map((el, i) => el % 2 === 0 ? el + i : el - i);
    let newSum = array.reduce((sum, el) => sum + el, 0);

    console.log(array);
    console.log(oldSum);
    console.log(newSum);
};

addAndSubtract3([5, 15, 23, 56, 35]);

addAndSubtract4 = (array = []) => {
    let oldSum = newSum = 0;

    array.forEach((el, i) => {
        oldSum += el;
        array[i] % 2 === 0 ? array[i] += i : array[i] -= i;
        newSum += array[i];
    });

    console.log(array);
    console.log(oldSum);
    console.log(newSum);
};

addAndSubtract4([5, 15, 23, 56, 35]);