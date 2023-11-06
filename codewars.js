//Удаление первого и последнего символа из строки
let str = 'country Russia';

// 1 - возвращаем часть строки между указанными индексами, с помощью substring()
function removeChar(str){
    return str.substring(1, str.length -1);
}
console.log(removeChar(str));

/*2 - c помощью slice(indexStart, indexEnd) - извлекает текст из строки и возвращает новую строку
indexStart - индекс первого символа, включаемого в возвращаемую подстроку.
indexEnd (необязательный) - индекс первого символа, исключаемого из возвращаемой подстроки.*/
function removeChar2(str){
    return str.slice(1, -1);
}
console.log(removeChar(str));


//Функция, делающая 4 основные математические операции

//1 - c помощью eval() - преобразует строку в js выражение
function basicOp(operation, value1, value2)
{
    return  eval(value1 + operation + value2)
}
console.log(basicOp('+', 4, 7));

//2 - с помощью case оператора
function basicOp2(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return "Неверный параметр";
    }
}
console.log(basicOp2('n', 4, 7));


function isIsogram(str){
    str = str.toLowerCase();
    for (let i=0; i<str.length-1; i++) {
        for(let j=i+1; j<str.length; j++) {
            if(str[i]===str[j]) return false
        }
    }
    return true
}

console.log(isIsogram(''));
