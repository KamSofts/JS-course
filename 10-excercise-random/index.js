let x;
let y;
let z;

function fnRoll() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("lblX").innerHTML = "" + x;
    document.getElementById("lblY").innerHTML = "" + y;
    document.getElementById("lblZ").innerHTML = "" + z;
}