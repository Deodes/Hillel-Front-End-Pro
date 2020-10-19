function saveVariable() {
    let prev = 0;
    return function (val) {
        return prev += val;;
    };
}

let sum = saveVariable();

function createCounter(start,step) {
    let count = start-step;
    function foo() {
    
        return count += step;

    };
    foo.reset = function(){
        return count = start;
    };
    return foo;

}

let calc = createCounter(5,2);


// console.log(sum(3));
// console.log(sum(5));
// console.log(sum(20));

// console.log(calc());
// console.log(calc());
// console.log(calc.reset());

