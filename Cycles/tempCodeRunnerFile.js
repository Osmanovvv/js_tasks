console.log('Результат задания 166 №21:');
let arr166_21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res166_21 = [];

for (let elem166_21 of arr166_21) {
    if (elem166_21 % 2 !== 0) {
        res166_21.push(elem166_21);
    }
}
console.log(res166_21);