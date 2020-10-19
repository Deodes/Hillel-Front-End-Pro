function odd(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 1) {
            result.push(arr[i]);
        } else {
            continue;
        }
        
    }
    return result;
}

function even(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            result.push(arr[i]);
        } else {
            continue;
        }
        
    }
    return result;
}

function flat(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {

        if(typeof arr[i] === 'number') {
            result.push(arr[i])

        } else {

            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);

            }
        }
    }
    return result;
}


// const array =
//     [
//         [1,2,3], 4, 5, [6, 7, 8], 9
//     ]


// console.log(flat(array));