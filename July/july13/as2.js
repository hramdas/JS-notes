var arr = ["Apple", "windows", "Linux", "Kindle", "Quiz"];

function oddLength(arr1){
    count = 0
    n= arr1.length
    if (n%2 !== 0){
       count=+ arr1.length
    }
    return count
}

console.log(arr.reduce(oddLength))