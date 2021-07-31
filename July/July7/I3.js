var square = {
    side : 4,
    area : function() {
        console.log('Area - ' + this.side ** 2);
    }
}
square.area();
square.side = 5;
square.area()