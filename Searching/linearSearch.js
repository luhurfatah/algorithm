const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return console.log(`Target is on index = ${i}`);
        }
    }
}

const arr = [1,2,10,11,20,12,13,100]
linearSearch(arr,100);