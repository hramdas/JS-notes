var numbers = {
    data : [1, 2, 6, 7, 3, 4, 9, 0],
    lessThan : function(val){   //val = input from 25th line
        var items = []
        for (var i = 0; i<this.data.length; i++){
            if (this.data[i] < val){    
                items.push(this.data[i]);
            }
        }
        return items;

    },
    greaterThan: function(val){  //val = input from 26th line
        var items = []
        for (var i=0; i<this.data.length; i++){
            if (this.data[i] > val){
                items.push(this.data[i]);
            }
        }
        return items;

    }
}

var lesser = numbers.lessThan(4);
var greater = numbers.greaterThan(6);

console.log("L- " + lesser.join(", "));
console.log("G- " + greater.join(", "));
