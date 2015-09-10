
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

    var finalOutput = output.join("");
    return finalOutput;

};

$(document).ready(function() {
    $("form#romanNumeral").submit(function(event) {
        var regNumber = parseInt($("input#regNumber").val());
        var result = romanNumeral(regNumber);

        $('.regNumber').text(regNumber);

        $(".result").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
