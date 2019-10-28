

function nonUniqueElements(data) {
    return data.filter(v => data.indexOf(v) !== data.lastIndexOf(v));    
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([5, 5, 5, 5, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));