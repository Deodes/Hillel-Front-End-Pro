function plural(age) {
    if (age % 10 == 1 && age % 100 != 11) {
        return age + ' год';
    } else if (age % 10 >= 2 && age % 10 <= 4 && age%100 != 12 && age%100 != 13 && age%100 != 14) { 
        return age + ' года';
    } else {
    return age + ' лет';
    }
}   
var age = +prompt("Сколько вам лет?");
alert(plural(age));
// module.exports = { plural }
