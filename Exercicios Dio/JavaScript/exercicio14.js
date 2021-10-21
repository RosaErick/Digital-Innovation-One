function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;


}

const meuArray = [1, 50, 39, 36, 76, 88, 13, 12, 19, 34, 68, 73, 72];

console.log(filtraPares(meuArray));