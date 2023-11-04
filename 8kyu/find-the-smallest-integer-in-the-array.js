// ❓ DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ✅ SOLUTION-1:
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

console.log(new SmallestIntegerFinder().findSmallestInt([34, 15, 88, 2]))
console.log(new SmallestIntegerFinder().findSmallestInt([34, -345, -1, 100]))

// ✅ SOLUTION-2:
function findSmallestInt(arr) {
    let min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));

// ✅ SOLUTION-3:
function findSmallestInt2(arr) {
    const mySort = (a, b) => {
        if (a < b) return -1;
        if (a === b) return 0;
        if (a > b) return 1;
    }
    return arr.sort(mySort)[0]
}

console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));