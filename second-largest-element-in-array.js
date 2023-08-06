
function secondLargest(arr) {
    let largest = arr[0];
    let secLargest = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            secLargest = largest;
            largest = arr[i];
        }else if (arr[i] > secLargest && arr[i] !== largest) {
            secLargest = arr[i];
        }
    }
    return secLargest;
}

const array = [10, 12, 13, 11, 5, 7, 88, 91, 97];
const secondlargest = secondLargest(array);
console.log("Second Largest in Array : ", secondlargest);