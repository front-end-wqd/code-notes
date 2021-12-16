// 初始 1个细胞
// 特性 每小时分裂一次 生命周期3小时
// 问题 n小时细胞的数量

const white = n => {
    if (n === 0) {
        return 1;
    }
    return white(n - 1) + yellow(n - 1) + green(n - 1);
};
const yellow = n => {
    if (n === 0) {
        return 0;
    }
    return green(n - 1);
};
const green = n => {
    if (n === 0) {
        return 0;
    }
    return white(n - 1);
};
const total = n => {
    return white(n) + green(n) + yellow(n);
}
console.log(total(7));