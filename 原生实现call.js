// call
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
Function.prototype.newCall = function (obj) {
    let newObj = obj || window;
    newObj.a = this;
    let newArguments = [];
    // 保存除了this
    for (let i = 1; i < arguments.length; i++) {
        newArguments.push(arguments[i]);
    }
    let result = newObj.a(...newArguments);
    delete newObj.a;
    return result;
}
let result = getName.newCall(person, "A", "B", "C");
console.log(result);