function newSetInterval(f, ms) {
    function inside() {
        f();
        setTimeout(inside, ms);
    }
    setTimeout(inside, ms);
}

function log() {
    console.log("a");
}

newSetInterval(log, 1000);