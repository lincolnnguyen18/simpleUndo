/**
 * example:
 * undone
 * undone
 * undone
 * most recent (index 3) <- not top unless index is 6
 * done
 * done
 * done
 */

transactions = [1, 2, 3, 4, 5, 6, 7]
mostRecentTransaction = 3

// /**
//  * Output:
//  * 1 2 3 4 5 6 7 
//    1 2 3 4 5 6   
//    1 2 3 4 5     
//    1 2 3 4       
//  */

// // console.log(transactions)
// printArray(transactions)
// for (let i = transactions.length - 1; i > mostRecentTransaction; i--) {
//     transactions.splice(i, 1);
//     // console.log(transactions);
//     printArray(transactions)
// }

/**
 * print array
 * @param {array} array
 */
function printArray(array) {
    array.forEach(element => process.stdout.write(element.toString() + " "));
    process.stdout.write('\n');
}

function print(something) {
    console.log(something);
}

function printNewLine() {
    console.log('\n');
}

// remove [0, 2 - 1]
// remove 2 elements at index 0
printArray(transactions);
transactions = transactions.splice(0, 4);
printArray(transactions);
printNewLine();
// // remove [3, end]
// transactions.splice(3);
// console.log(transactions);
// // push at end?
// transactions.push(999);
// console.log(transactions);

const Immutable = require('immutable');

var myHistory = Immutable.List([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
var historyIndex = 5;

printArray(myHistory.toJS());
myHistory = myHistory.slice(0, historyIndex + 1);
printArray(myHistory.toJS());

print(myHistory.get(3));


printNewLine();

var myHistory2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var historyIndex2 = 5;
printArray(myHistory2);
myHistory2 = myHistory2.slice(0, historyIndex2 + 1);
printArray(myHistory2);

printNewLine();

var myHistory3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
printArray(myHistory3);
myHistory3 = myHistory3.slice(0, 4);
printArray(myHistory3);