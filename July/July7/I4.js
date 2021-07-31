var details = {
    data : [],
    average : function() {

        var total = 0;
        for (var i = 0; i < this.data.length; i++){
            total = total + this.data[i].mk;
        }
       console.log(total)
    }
} // console.log(details.average(total))