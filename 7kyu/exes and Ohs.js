// ❓ DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ✅ SOLUTIONS:

function XO1(str) {
    str = str.toLowerCase();
    let countX=0
    let countO=0
    for (i=0; i<str.length; i++){
        if (str[i] === 'x') {
            countX++;
        }
        if (str[i] === 'o') {
            countO++;
        }
    }
    return countX === countO
}

console.log(XO1('zpzpzpp'));
console.log(XO1("xooxx"));

function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO2('zpzpzpp'));
console.log(XO2("xooxx"));

const XO3 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO3('zpzpzpp'));
console.log(XO3("xooxx"));

function XO4(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(XO4('zpzpzpp'));
console.log(XO4("xooxx"));