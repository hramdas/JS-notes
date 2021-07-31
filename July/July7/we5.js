var marks = {
    Nrupul: 10,
    Prateek: 20,
    Aman: 30,
    Albert: 5,
    Yogesh: 15
} 

mark = []
for (k in marks) {
    mark.push(marks[k])

    function average(){
        length = mark.length
        sum = 0
        for (var i = 0; i < length; i++)
        sum = sum + mark[i]
        console.log(sum/length)
    }

    function minimum() {
        min = mark[0]
        for (var i = 1; i < length; i++)
        if (min > mark[i]){
            min = mark[i]
            index = i
        } else (min = min)
        for (k in marks){
            if (marks[k] == min)
            console.log(k);
        }
    } 


    function maximum() {
        max = mark[0]
        for (var i = 1; i < length; i++)
        if (max < mark[i]){
            max = mark[i]
            index = i
        } else (max = max)
        for (k in marks){
            if (marks[k] == max)
            console.log(k);
        }
    }
} 
average();
minimum();
maximum();


