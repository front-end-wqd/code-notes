function getName(one, two, three) {
    console.log(this.name);
    console.log(one, two, three);
}
const person = {
    name: "wqd"
};
Function.prototype.newBind = function (obj) {
    let that = this;
    let arr = Array.prototype.slice.call(arguments, 1);
    return function () {
        let newArr = Array.prototype.slice.call(arguments);
        let sumArr = arr.concat(newArr);
        that.apply(obj, sumArr);
    }
}
getName.newBind(person, "A", "B")("C");