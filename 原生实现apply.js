function getName(one, two, three) {
    return {
        name: this.name,
        a: one,
        b: two,
        c: three
    }
}
const person = {
    name: "wqd"
};
Function.prototype.newApply = function (obj, arr) {
    let newObj = obj || window;
    let result;
    newObj.a = this;
    if (!arr) {
        result = newObj.a();
    } else {
        result = newObj.a(...arr);
    }
    delete newObj.a;
    return result;
}
let result = getName.newApply(person, ["A", "B", "C"]);
console.log(result);