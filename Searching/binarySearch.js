const binarySearch = (arr, target) => {
    let first = 0;
    let last = arr.length -1;   

    while(first <= last ) {
        let mid = Math.floor((first + last)/2);

        if(arr[mid] == target){
            return console.log(`Target is on index = ${mid}`)
        }

        if(arr[mid] < target) {
            first = mid + 1;
        }

        if(arr[mid] > target){
            last = mid -1
        }
    }
    return console.log(`Target tidak ditemukan`)
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

binarySearch(arr,10);