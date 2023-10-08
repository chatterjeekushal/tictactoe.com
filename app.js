
let turn = "x"
let isgameover = false;

// function to change the turn
const changeturn = () => {

    return turn === "x" ? "0" : "x"



}

// function to chak for a win

const chakwin = () => {

    let boxtext = document.getElementsByClassName("boxtext");

    let wins = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    

    wins.forEach(e => {

    

        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML != "")) {

            document.querySelector(".info").innerHTML = boxtext[e[0]].innerHTML + "won"

            isgameover = true
            document.getElementById("img").style.width = "200px";
        }

    })

}



// game logic


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {


    //console.log(element); div element class box

    let boxtext = element.querySelector('.boxtext');



    element.addEventListener('click', () => {

        if (boxtext.innerHTML === "") {

            boxtext.innerHTML = turn;

            turn = changeturn();

            chakwin();
            if (isgameover == false) {

                document.getElementsByClassName("info")[0].innerHTML = "turn for" + turn;
            }
        }

    })

})


// reset button

let reset= document.getElementById("reset");

reset.addEventListener('click',()=>{

    let boxtext = document.querySelectorAll('.boxtext');

    Array.from(boxtext).forEach(element=>{

element.innerHTML="";

    })

    turn="x"

    isgameover=false

    document.getElementsByClassName("info")[0].innerHTML="turn for"+turn;
    document.getElementById("img").style.width = "0px";

})