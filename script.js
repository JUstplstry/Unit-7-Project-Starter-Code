$("button").click(function() {
    let Q1 = $(".Q1").val();
    let Q2 = $(".Q2").val();
    let Q3 = $(".Q3").val();


    let currentYear = 2050 - Q1;
    let yearlyincome = Q2 * Q3;
    let networth = currentYear * yearlyincome;

    if (networth < 1000000) {
        $(".fortune-display").text("You'll be a brokie 😭 😭.  You will have less than 1 million dollars in the bank.   ");

        $(".fortune-image").html("<img src='https://thumbs.gfycat.com/MadeupGraveFlee-max-1mb.gif'>");
    } else if (networth > 1000000) {
        $(".fortune-display").text(" Your doing pretty well for yourself. What color is your bugatti ?  ");

    }
});