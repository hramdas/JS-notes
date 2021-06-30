var num = 7;
var number = num.toString();
var letter=[];
for (i=0; i<number.length; i++){
switch (number[i]){
    case '0' :
        letter.push("zero");
        break;
    case '1':
        letter.push("One");
        break;
    case "2":
        letter.push("Two");
        break;
    case '3':
        letter.push("Three");
        break;
    case "4":
        letter.push("Four");
        break;
    case "5":
        letter.push("Five");
        break;
    case "6":
        letter.push("Six");
        break;
    case "7":
        letter.push("Seven");
        break;
    case "8":
        letter.push("Eight");
        break;
    case "9":
        letter.push("Nine");
        break;
    default:
        break;
}
}
console.log(letter.join(" "));
