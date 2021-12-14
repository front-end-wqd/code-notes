function search(target) {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    let element;
    while(start <= end) {
        middle = Math.floor((start + end) / 2);
        element = arr[middle];
        if (element === target) {
            return middle;
        } else if (target < element) {
            end = middle - 1;
        } else {
            start = middle + 1;            
        }
    }
    // 目标不在数组中
    return -1;
}
// 数组要先进行排序再进行二分查找
let arr = [1, 12, 34, 66, 70, 98];
console.log(search(66));