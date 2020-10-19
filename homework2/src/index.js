function xmasTree(pyramidHeight, symbol) {
    var prev = '';
    var current = '';
    var res = symbol + symbol;
    var j = 0;
    for (var i = 0; i < pyramidHeight; i++) {
        var space = '';
        while(j!= i){
            symbol += res;
            j++;
        }
        for(var n = pyramidHeight-1; n > i; n--) {
            space += " ";
        }
        current = space + symbol + "\n";
        prev += current;
    }
    return prev;

}
var pyramidHeight = +prompt("Введите высоту пирамиды");
alert(xmasTree(pyramidHeight, '$'));
// console.log(xmasTree(5, '$'));
// module.exports = { xmasTree };
