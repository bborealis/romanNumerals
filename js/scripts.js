var countUpBy = function(countTo, countBy) {
    var counter = 0;
    var numbers = [];
    while (counter < countTo) {
            counter += countBy;
            numbers.push(counter);
        }

    return numbers.join(", ");
};

$(document).ready(function() {
    $("form#countUpBy").submit(function(event) {
        var countTo = parseInt($("input#countTo").val());
        var countBy = parseInt($("input#countBy").val());
        var output = countUpBy(countTo, countBy);

        $('.countTo').text(countTo);
        $('.countBy').text(countBy);
        //$("#result p").text(output);

        $(".result").text(output);

        $("#result").show();
        event.preventDefault();
    });
});
