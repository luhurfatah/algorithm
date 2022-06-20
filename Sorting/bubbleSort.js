const bubbleSort = (arr) => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

const arr = [3, 1, 5, 2, 10, 9];

console.log(bubbleSort(arr))