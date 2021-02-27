let dots = {}, undo = {}, redo = {};

const Immutable = require('immutable');
var myHistory = [Immutable.List([])];
var historyIndex = 0;

function operation(fn) {
    myHistory = myHistory.slice(0, historyIndex + 1);
    var newVersion = fn(myHistory[historyIndex]);
    myHistory.push(newVersion);
    historyIndex++;
    draw();
}

function addDot(x, y) {
    operation(function (data) {
        return data.push({
            x: x,
            y: y,
            id: +new Date()
        });
    });
}

function print(something) {
    console.log(something);
}

function printNewLine() {
    console.log('\n');
}

function draw() {
    dots.innerHTML = '';
    // myHistory[historyIndex].forEach(function (dot) {
    //     var elem = dots.appendChild(document.createElement('div'));
    //     elem.className = 'dot';
    //     elem.style.left = dot['x'] + 'px';
    //     elem.style.top = dot['y']+ 'px';
    //     // create dot
    // });
    print(historyIndex);
    print(myHistory.length);
    print(myHistory[historyIndex].toJS());
    undo.disabled = (historyIndex != 0) ? 'enabled' : 'disabled';
    redo.disabled = (historyIndex !== myHistory.length - 1) ? 'enabled' : 'disabled';
    print(undo.disabled);
    print(redo.disabled);
    printNewLine();
}

function doUndo() {
    historyIndex--;
    draw();
}

function doRedo() {
    historyIndex++;
    draw();
}

draw();
addDot(100, 0);
doUndo();
doRedo();
addDot(100, 1);
addDot(100, 2);
addDot(100, 3);
addDot(100, 4);
addDot(100, 5);
addDot(100, 6);