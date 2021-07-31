function runProgram(input) {
    input = input.trim().split("\n")

    var products = []
    for (var i = 0; i< input.length; i++){
        var groceries=input[i].trim().split(" ");
        var [stock, qty, price] = groceries;
        products[i] = {stock, qty, price}
    }
    //console.log(groceries)
    console.log(products)
    

    let obj = {
        data: products,
        total: function() {
            var totalcosts=0;
            for (var i=0; i< this.data.length; i++){
                
            }
        }
    } 
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`Rice 2 60
    Dal 3 50
    Salt 1 20`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  