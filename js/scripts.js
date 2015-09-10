// var romanNumeral = function(regNumber) {
//     var romanNum = "I";
//     var output = romanNum.concat(romanNum);
//     if (regNumber === 1) {
//         return romanNum;
//     } if (regNumber === 2) {
//         return output;
//     } if (regNumber === 3) {
//         return output.concat(romanNum);
//     }
//
// };

var romanNumeral = function(regNumber) {
    var numArray = [1000, 500, 100, 50, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var romanArray = ["M", "D", "C", "L", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
    var output = [];


    while(regNumber > 0) {
    for(var i=0; i <= numArray.length; i++) {
        if ((regNumber >= numArray[i]) && (regNumber < 3999)) {
            output.push(romanArray[i]);
            regNumber -= numArray[i];
            break;
        }

    }
}
    var stringOutput = output.toString();
    var finalOutput = stringOutput.replace(",", "");
    return finalOutput;



};
