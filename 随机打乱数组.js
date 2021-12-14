let arr = [1, 2, 3, 4, 5, 6];
for (let i = arr.length - 1; i >= 0; i--) {
    let index = Math.floor(Math.random() * i);
    [arr[i], arr[index]] = [arr[index], arr[i]];
}
console.log(arr);