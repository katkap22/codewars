//Наименьший элемент в массиве (3 способа)

let a = [78,56,0,232,12,8,-2016];

//1 - перебор всех элементов
function findSmallestInt(arr) {
    let min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
console.log(findSmallestInt(a));

/*2 - с помощью сортировки (в качестве аргумента передаем ф-ю пользовательской сортировки) и затем взять нулевой
элемент массива*/
function findSmallestInt2(arr) {
    const mySort = (a, b) => {
        if (a < b) return -1;
        if (a === b) return 0;
        if (a > b) return 1;
    }
    return arr.sort(mySort)[0]
}
console.log(findSmallestInt2(a));

//3 - c помощью Math.min() и деструктуризации
function findSmallestInt3(arr) {
    return Math.min(...arr);
}
console.log(findSmallestInt3(a));