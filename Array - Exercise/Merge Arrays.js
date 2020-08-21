mergeArrays = (array1 = [], array2 = []) => {
    const array3 = [];
    for (let i = 0; i < array1.length; i++) {
        let el;
        if (i % 2 === 0) {
            el = +array1[i] + +array2[i];//tuka subirame chislata ot izbranite elementi koito sa stringove
        } else {
            el = array1[i] + array2[i];// tuka se murgevat
        }
        array3.push(el);
    }
    console.log(array3.join(' - '))
};