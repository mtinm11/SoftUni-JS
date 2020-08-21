CmnElemts = (array1 = [], array2 = []) => {
    array1.forEach(el => array2.find(x => x === el) ? console.log(el) : null);

}


CmnElemts = (array1 = [], array2 = []) => {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            console.log(array1[i]);
        }
    }
};
