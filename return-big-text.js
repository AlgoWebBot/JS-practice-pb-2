
function filterLargeName(arr) {
    let largeName = arr[0].length;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > largeName) {
            largeName = arr[i].length;
            if (largeName === arr[i].length) {
                name = arr[i];
            }
        }
    }
    return name;
}




const array = ["Alice", "Bob", "AlberAinstein", "xyzcnbcncbnbhffjf", "Shimul", "Charlie", "abcdefghijklmnopqrst"];
const bigName = filterLargeName(array);
console.log(bigName);
console.log(typeof bigName);