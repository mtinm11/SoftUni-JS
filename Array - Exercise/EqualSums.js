equalSums = (array = []) => {
    let exist = false;
    let leftsum = 0;
    let rightsum = 0;

    for(let i = 0; i < array.length; i++){
        for(let l = 0; l < i; l++) leftsum += array[i];
        for(let r = array.length - 1; r > i; r--) rightsum += array[i];

        if(leftsum === rightsum){
            console.log(i);
            exist = true;
        }
        if(exist)break;
        
        if(!exist)console.log('no');
    }
}

equalSums([1,2,3,3]);