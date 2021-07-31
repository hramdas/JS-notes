var details = {
    addressess : [
        {city: "BLR", type: "home", pincode: "560081", phones: [9960996121, 8329307743] },
        {city: "HYD", type: "office", pincode: "520001", phones: [9096186025, 8329307743] }
    ],

    findCityByMobile: function(pho) {
        for (var i=0; i<this.addressess.length; i++){
            var adr = this.addressess[i]; // this. used only inside object
            var phones = this.addressess[i].phones;
            cities = []
            for(var j=0; j<phones.length;j++){
                if(phones[j] == pho){
                    cities.push(adr.city);
                   // console.log(adr.city + ' - ' + adr.type)
                }
            }
        }
        return cities;
    }
}
var search = details.findCityByMobile(9960996121);
if(search.length==0) {
    console.log("Phone Not Found");
} else {
    console.length(search);
}


// console.log(Object.keys(details.addressess[0]));

for (var i=0; i<details.addressess.length; i++){
    console.log(details.addressess[i].city + ' - '+ details.addressess[i].pincode + ' - ' + details.addressess[1].phones.join(', '))
}