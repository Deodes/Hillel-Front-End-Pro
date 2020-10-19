function padString(str, number, symbol = " ", flag = false) { //заполнить строку символами
    if (number >= str.length) {
        if (symbol.length === 1) {
            if (flag === true) {
                str = symbol.repeat(number - str.length) + str;
            } else {
                str += symbol.repeat(number - str.length);
            }
        } else {
            return "symbol have to be singular!"
        }
    } else {
        return str
    }
    return str;
}



function getResult(firstNumber, secondNumber, sign) { //калькулятор
    if (firstNumber == +firstNumber && secondNumber == +secondNumber && typeof firstNumber == 'number' && typeof secondNumber == 'number') {
        switch (sign) {
            case "+":
                return firstNumber + secondNumber;
                break;

            case "-":
                return firstNumber - secondNumber;
                break;

            case "*":
                return firstNumber * secondNumber;
                break;
            case "/":
                return firstNumber / secondNumber
                break;

            default:
                return "choose the right sign"
                break;
        }
    } else {
        return "first two arguments have to be number"
    }
}

function isCharPresent(str, symbol) { //входит ли в строку символ
    let result;
    if (symbol.length > 1) {
        return "symbol must be singular"
    }
    for (i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}

function charIndexOf(str, symbol) { //найти индекс входящего символа
    let result;
    if (symbol.length > 1) {
        return "symbol have to be singular"
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    return result;
}
// console.log(padString("hello", 15, "*"));
// console.log(getResult(3,5,"*"));
// console.log(isCharPresent("hello", "o"));
// console.log(charIndexOf("hello", "e"))