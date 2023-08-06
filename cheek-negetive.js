
function negetiveSearch(array) {
    let negetive = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] < 0) {
            negetive.push(array[i]);
        }
    }
    return(negetive);
}


const numbersArray = [5, -3, 8, -2, 0, 10, -7, 4, -1, 6];
const negetiveNumber = negetiveSearch(numbersArray);
console.log(negetiveNumber);