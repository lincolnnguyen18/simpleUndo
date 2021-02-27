var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');

// list of dots (JS list) done so far
var myHistory = [Immutable.List([])];
// head
var historyIndex = 0;

// takes function (fn) and pushes it to myHistory
function operation(fn) {
    myHistory = myHistory.slice(0, historyIndex + 1);
    // myHistory = remove all dots after head
    var newVersion = fn(myHistory[historyIndex]);
    // newVersion = function applied to head
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
        return data.push(Immutable.Map({
            x: x,
            y: y,
            id: +new Date()
        }));
    });
}

function draw() {
    dots.innerHTML = '';
    // clear dots in view
    myHistory[historyIndex].forEach(function (dot) {
    // for each dot in history stack, perform following on each dot
        var elem = dots.appendChild(document.createElement('div'));
        // append dot div in dots div
        elem.className = 'dot';
        elem.style.left = dot.get('x') + 'px';
        elem.style.top = dot.get('y') + 'px';
        // create dot

        // elem.addEventListener('click', function (e) {
        //     removeDot(dot.get('id'));
        //     e.stopPropagation();
        // });
        // clicking on a dot removes it
        
    });
    undo.disabled = (historyIndex != 0) ? '' : 'disabled';
    // if no dots then disable undo
    redo.disabled = (historyIndex !== myHistory.length - 1) ? '' : 'disabled';
    // if no dots after head then disable redo
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