var year = 2021;
for (var i = 1; i<=12; i++){
    var days = 31;
    if (i==4 || i==6|| i==9 || i==11){
        days = 30;
    } else if (i == 2 && year % 4 ==0){
        days = 29;
    } else if (i==2){
        days = 28
    } else {
        days = 31;
    }

    for (var j =1; j<=days; j++){ 
        console.log(year + " - " + i + " - " + j)

    } 
}