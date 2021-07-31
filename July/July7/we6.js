var obj = {
    length: 12,
    breadth: 8,
    area: function(){
        out = this.length * this.breadth
    console.log(out)},
    perimeter: function(){
        out = 2*(this.length + this.breadth)
        console.log(out)
    }
    

}
obj.area();
obj.perimeter()