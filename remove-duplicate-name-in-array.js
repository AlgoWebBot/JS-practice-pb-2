
//without defined function
function removeDuplicate(arr) {
    let arr2 = [];
    for (var i = 0; i < arr.length; i++){
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}

const array = ["Alice", "Bob", "Charlie", "Bob", "David", "Alice", "Eve", "Bob", "Charlie", "Bob", "David", "Alice", "Shimul", "Zahan", "Hiya", "Sohan"];
const new_array = removeDuplicate(array);

//with function
// console.log(array.filter());