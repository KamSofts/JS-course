document.getElementById("submit").onclick = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        console.log("Not a Number");
    } else {
        let c = Math.pow(a, 2) + Math.pow(b, 2);
        c = Math.sqrt(c);
        document.getElementById("c").innerHTML = ("Side a=" + a + ", side b=" + b + " and side c=" + c);
        document.getElementById("a").innerHTML = "";
        document.getElementById("b").innerHTML = "";
    }
}



docume