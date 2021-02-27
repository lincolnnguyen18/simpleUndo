var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');

// list of dots (JS list) done so far
var myHistory = [];
// head
var historyIndex = 0;

// takes function (fn) and pushes it to myHistory
function operation(fn) {
    myHistory = myHistory.slice(0, historyIndex + 1);
    // myHistory = remove all dots after head
    var newVersion = fn(myHistory);
    // newVersion = function applied to list made of dots from beginning to head
    myHistory.push(newVersion);
    historyIndex++;
    // push newVersion to history and update head
    draw();
    // redraw dots
}

// function to apply to data (head of history)
// pushes dictionary/map of coordinates and id as dot on history stack
function addDot(x, y) {
    operation(function (data) {
        return data.push({
            x: x,
            y: y,
            id: +new Date()
        });
    });
}

function draw() {
    dots.innerHTML = '';
    // clear dots in view

    let backup = myHistory.splice();
    myHistory = myHistory.splice(0, historyIndex + 1);

    if (myHistory.length > 0) {
        myHistory.forEach(function (dot) {
        // for each dot in history stack, perform the following on each dot
            var elem = dots.appendChild(document.createElement('div'));
            // append dot div in dots div
            elem.className = 'dot';
            elem.style.left = dot['x'] + 'px';
            elem.style.top = dot['y']+ 'px';
            // create dot
        });
    }

    myHistory = backup;
    
    undo.disabled = (historyIndex != 0) ? '' : 'disabled';
    // if no dots then disable undo
    // if head not at 0 then don't disable undo
    redo.disabled = (historyIndex !== myHistory.length - 1) ? '' : 'disabled';
    redo.disabled = (myHistory.length == 0 && historyIndex == 0) ? 'disabled' : '';
    // if no dots after head then disable redo
    // if head not at end then don't disable redo
    // if history empty and head at 0 then disable redo
}

// clicking the background calls addDot (which also calls draw())
dots.addEventListener('click', function (e) {
    addDot(e.pageX, e.pageY);
});

// clicking the undo calls retreats head and calls draw if there are dots in history
undo.addEventListener('click', function () {
    if (historyIndex > 0) historyIndex--;
    draw();
});

// clicking the redo calls advances head and calls draw if there are dots after head
redo.addEventListener('click', function () {
    if (historyIndex < myHistory.length) historyIndex++;
    draw();
});

// draw initial empty history
draw();