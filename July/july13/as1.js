var arr = [2, 4, 5, 3, 6, 8];

var res = []
for(var i=0; i<arr.length; i++){
    if(i%2==0 && arr[i]%2 == 0){
        res.push(arr[i])
    }
}
console.log(res)

