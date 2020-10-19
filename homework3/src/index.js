function xmasTree(pyramidHeight, symbol) {
    if (symbol > symbol.length) {
        return "JUST 1 SYMBOL";
    } else {
        let prev = '';
        let space;
        let res = symbol;
        for (let i = pyramidHeight; i > 0; i--) {
            space = ' ';
            space = space.repeat(i - 1);
            symbol = res.repeat(2 * (pyramidHeight - i) + 1)
            current = space + symbol + "\n";
            prev += current;
        }
        return prev;
    }
}
let pyramidHeight = +prompt("Введите высоту пирамиды");
alert(xmasTree(pyramidHeight, '$'));
// console.log(xmasTree(5, '$'));
// module.exports = { xmasTree };
