var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');
var myHistory = [Immutable.List([])];
var historyIndex = 0;
function operation(fn) {
    myHistory = myHistory.slice(0, historyIndex + 1);
    console.log(myHistory);
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
function draw() {
    dots.innerHTML = '';
    myHistory[historyIndex].forEach(function (dot) {
        var elem = dots.appendChild(document.createElement('div'));
        elem.className = 'dot';
        elem.style.left = dot['x'] + 'px';
        elem.style.top = dot['y'] + 'px';
        elem.addEventListener('click', function (e) {
            removeDot(dot.get('id'));
            e.stopPropagation();
        });
    });
    undo.disabled = (historyIndex != 0) ? '' : 'disabled';
    redo.disabled = (historyIndex !== myHistory.length - 1) ? '' : 'disabled';
}
dots.addEventListener('click', function (e) {
    addDot(e.pageX, e.pageY);
});
draw();