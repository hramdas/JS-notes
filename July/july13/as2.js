var arr = ["Apple", "windows", "Linux", "Kindle", "Quiz"];

function oddLength(arr){
    count = 0
    for(var str of arr){
        if(str.length%2 !== 0){
            count+=str.length
        }
    }
    return count
}

console.log(oddLength(arr))