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

// /**
//  * print array
//  * @param {array} array
//  */
// function printArray(array) {
//     array.forEach(element => process.stdout.write(element.toString() + " "));
//     process.stdout.write('\n')
// }

// remove [0, 2 - 1]
transactions.splice(0, 2)
console.log(transactions)
// remove [3, end]
transactions.splice(3)
console.log(transactions)
// push at end?
transactions.push(999)
console.log(transactions)