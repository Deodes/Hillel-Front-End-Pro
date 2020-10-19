const obj = {
    num: 300,
}

const user = {
    name: "Vova",
    surname: "Penchev",
}

function bind(currentContext, callback, ...rest) {

    return function (...args) {
       return callback.apply(currentContext, rest.concat(args))
    }

}

function countArguments() {
    return this.num + arguments[0] + arguments[1];
};

function showName() {
    return this.name + " " + this.surname + " " + arguments[0];
}
let request = bind(obj, countArguments, 5);
let request2 = bind(user, showName, 20);
// console.log(request(3));
// console.log(request2(20));

