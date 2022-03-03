function f(a) {
    return function (b, c) {
        return `${a}${b}${c}`;
    }
}
const res = f(1);
const result1 = res(2, 3);
const result2 = res(4, 5);
const result3 = res(6, 7);
console.log(result1, result2, result3);