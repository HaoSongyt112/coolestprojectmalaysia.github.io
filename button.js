let state = "state1";

function handleState1() {
    document.getElementById("demo").innerHTML= "MEMBERS: GONG XUAN";
    state = "state2"; // Change state after handling
}

function handleState2() {
    document.getElementById("demo").innerHTML= "MEMBERS: BRYAN CHANG";
    state = "state3"; // Change state after handling
}

function handleState3() {
    document.getElementById("demo").innerHTML= "MEMBERS: HAO SONG";
    state = "state4"; // Change state after handling
}

function handleState4() {
    document.getElementById("demo").innerHTML= "Guest";
    state = "state1"; // Change state after handling
}

document.getElementById("myButton").addEventListener("click", function() {
    if (state === "state1") {
        handleState1();
    } else if (state === "state2") {
        handleState2();
    } else if (state === "state3") {
        handleState3();
    } else if (state === "state4")
        handleState4();
});