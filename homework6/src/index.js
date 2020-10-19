const array = [1, 2, 3, 4, 5, 6, 7, 8];
const notification = [
    {
        date: '31/07/2019',
        msg: 'My first msg'

    },
    {
        date: '14/03/2020',
        msg: 'Second msg'
    },
    {
        date: '14/03/2020',
        msg: 'Third msg'
    },
];

function map(arr, callback) { //метод map
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const variable = callback(arr[i], i, arr);
        result.push(variable);
    }
    return result;
}

function calc(item, index, arr) {
    return item * 2 + 1; //способ трансформации
}


function filter(arr, callback) { //метод filter
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const condition = callback(arr[i], i, arr);
        if (condition) {
            result.push(arr[i]);
        }
    }
    return result;
}

function check(item, index, arr) {
    return item < 5; //условие для фильтрации
}

function group(arr) {
    const result = arr.reduce(function (obj, item) {
        if (obj[item.date] !== undefined) { 
            const arr = obj[item.date]; 
            arr.push(item.msg);
            obj[item.date] = arr; 

        } else {
            obj[item.date] = [item.msg]; 
        }
        return obj;
    }, {});
    return result;
}


console.log(group(notification));
// console.log(map(array, calc));
// console.log(filter(array, check));