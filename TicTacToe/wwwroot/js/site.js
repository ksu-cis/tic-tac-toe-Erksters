// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var turn = "x"
function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innertext = "It is player " + turn + "'s turn.";
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o"
        }
        else {
            turn = "x"
        }
    }
    if (checkForWin()) {
        //remove listeners
    }
    else {
        setTurn();
    }

    

}

var cells = document.getElementsByClassName("square")
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick)
}

setTurn();

function setWinner(winner){
    var turnElement = document.getElementById("turn");
    turn.Element.innerText = 'player' + turnElement + 'wins!';

}
function checkForWin() {

    var cells = document.getElementsByClassname("square");
    //Check Horizontal win
    for (var i = 0; i < 9; i += 3) { 
        if ( cells[i].innerText && cells[i].innerText === cells[i + 1].innerText && cells[i + 1].innerText === cells[i + 2].innerText) {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }

    //Check Vertical win
    for (var i = 0; i < 9; i++) {
        if (cells[i].innerText && cells[i].innerText === cells[i + 3].innerText && cells[i + 3].innerText === cells[i + 6].innerText) {
            setWinner(cells[0].innerText);
            return true;
        }
    }


    //Check Diagonal win
    if (cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) { return true; }
    if (cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) { return true; }

    return false;
        

}


var cells = document.getElementByClassName("cell");
for (var i = 0; i < cells.length; i++) {

}