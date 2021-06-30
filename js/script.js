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

// Selecting the all the table cells for the DOM
const $checkerboard = $("td");
$(document).ready(function() {
    $("td").click(function() {
        $(this).show();
        console.log("Board Cell clicked");
    })
});


//DOM Players Turn
let $redTurnText = $(".Red-Turn-Text");
let $blackTurnText = $(".Black-Turn-Text");

// Players Information
let playersTurn = true;

//Red Checker Information
let redCheckerPiece = [ 
    "Red Checker",
    redCheckerCount = 12,
    redCheckerId = -1,
    redCheckerBoardIndex = -1,
    $redCheckerPiece = $("p"),

]

// Black Checker Information
let blackCheckerPiece = [
    "Black Checker",
    blackCheckerCount = 12,
    blackCheckerId = -1,
    blackCheckerBoardIndex = -1,
    $blackCheckerPiece = $("p2"),
]

//Red Checker Piece Selector and Event Listener
$(document).ready(function() {
    $("p").click(function() {
        $(this).show();
        console.log("Red Checker Selected");
    })
});

//Black Checker Piece Selector and Event Listener
$(document).ready(function() {
    $("p2").click(function() {
        $(this).show(); 
        console.log("Black Checker Selected");
    })
   
});

//Event Listeners for Red Checkers
function redCheckerEventListener() {
    if (playersTurn) {
        for(let r = 0; r < redCheckerPiece.length; r++) {
            redCheckerPiece[r].addEventListener("click", getRedCheckerPiece);
        }
    }
};

//Event Listeners for Black Checkers
function blackCheckerEventListener() {
    if (playersTurn) {
        for (let b = 0; b < blackCheckerPiece.length; b++) {
            blackCheckerPiece[b].addEventListener("click", getBlackCheckerPiece);
        }
    }
};

//Highlight the spuare a single checker piece can move too.
function availableSquare() {

};

//Move Selected Checker Piece
function moveSelectedChecker() {
    let moveChecker = (checkerboard, redCheckerPiece, newCheckerboard) => {
        if(newCheckerboard > checkerboard.length -1){
            console.log("Moved Checker!");
            return null;
        } else if (!(checkerboard.includes(redCheckerPiece))){
            console.log("Cannot move there");
            return null;
        }
        checkerboard.splice(checkerboard.indexOf(redCheckerPiece), 1);
        checkerboard.splice(redCheckerPiece, newCheckerboard);
        return checkerboard;
    }
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


