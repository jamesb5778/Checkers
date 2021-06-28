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

// Get all the cells from the table checkerboard
$('.td');

//players information
const playersTurn = true;

//Red Checker Information
let redCheckerPiece = [ 
    "Red Checker",
    redCheckerCount = 12,
]
    console.log(redCheckerPiece);

// Black Checker Information
let blackCheckerPiece = [
    "Black Checker",
    blackCheckerCount = 12,
]
    console.log(blackCheckerPiece);

//Red Checker Piece Selector
$(document).ready(function() {
    $("p").click(function() {
        $(this).show();
        console.log("Red Checker Selected");
    })
});

//Black Checker Piece Selector
$(document).ready(function() {
    $("p2").click(function() {
        $(this).show(); 
        console.log("Black Checker Selected");
    })
});

//Highlight the spuare a single checker piece can move too.
function availableSquare() {

};

//Move Selected Checker Piece
function moveSelectedPiece() {

};

//Jump Action
function jumpAction() {

};

// Double multiple jump Action() 
function jumpMultipleAction() {

};

// Click to Start a New Game
function startNewGame () {

};
