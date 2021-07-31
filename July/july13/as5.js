var arr = ["assignment", "problem", "media", "upload"]

function stringPatteern(arr1){
    n= arr1.length
    if (arr1[0] == "a" || arr1[n-1] == "a"){
        return arr1
    }
}

console.log(arr.filter(stringPatteern))