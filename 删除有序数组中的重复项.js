// 双指针法
var arr = [2, 2, 4, 4, 4, 6];
for (var i = 0, j = 0; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
        j++;
        arr[j] = arr[i];
    }
}
console.log(j + 1, arr.slice(0, j + 1));