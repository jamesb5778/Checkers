//Checkeboard layout and starting positions
const checkerboard = [
    null, "RC1", null, "RC2", null, "RC3", null, "RC4",
    "RC5", null, "RC6", null, "RC7", null, "RC8", null,
    null, "RC9", null, "RC10", null, "RC11", null, "RC12",
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    "BC1", null, "BC2", null, "BC3", null, "BC4", null,
    null, "BC5", null, "BC6", null, "BC7", null, "BC8",
    "BC9", null, "BC10", null, "BC11", null, "BC12", null
]
//Red Checker Declared
let redCheckerPiece = ("Red Checker");
    console.log(redCheckerPiece);

// Black Checker Declared
let blackCheckerPiece =("Black Checker");
    console.log(blackCheckerPiece);

//Red Checker Piece Selector
$(document).ready(function() {
    $("p").click(function() {
        $(this).show();
        console.log("Click red checker");
    })
});

//Black Checker Piece Selector
$(document).ready(function() {
    $("p2").click(function() {
        $(this).show();
        console.log("Click black checker");
    })
});

//Highlight the spuare a single checker piece can move too.
//function availableSquare() {
    //if(checkerboard[])
//}
