var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');

// List of operations (JS list) done so far
var myHistory = [Immutable.List([])];
// Head
var historyIndex = 0;

// takes function (fn) and pushes it to myHistory
function operation(fn) {
    myHistory = myHistory.slice(0, historyIndex + 1);
    // myHistory = remove all operations after head
    var newVersion = fn(myHistory[historyIndex]);
    // newVersion = function applied to head
    myHistory.push(newVersion);
    historyIndex++;
    // push newVersion to history and update head
    draw();
    // redraw dots
}
