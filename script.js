var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');

var myHistory = [];
var historyIndex = 0;

// here are our two operations: addDot is what
// you trigger by clicking the blank
function addDot(x, y) {
    // operation(function (data) {
    //     return data.push(Immutable.Map({
    //         x: x,
    //         y: y,
    //         id: +new Date()
    //     }));
    // });
    console.log(x, y);
}

// clicking the background adds a dot
dots.addEventListener('click', function (e) {
    addDot(e.pageX, e.pageY);
});