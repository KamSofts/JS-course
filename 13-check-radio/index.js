document.getElementById("submit").onclick = function () {
    let result;

    const chkMode = document.getElementById("chkMode");
    result = document.getElementById("lblMode").innerHTML;
    if (!chkMode.checked) {
        const isUPI = document.getElementById("optUPI").checked;
        result += " " + (isUPI ? "UPI PAYMENT" : "CASH PAYMENT");
    }

    document.getElementById("lblResult").innerHTML = result;
    document.getElementById("chkMode").checked = false;
    document.getElementById("lblMode").innerHTML = "Cash Bill";
}

document.getElementById("chkMode").onchange = function () {
    let result;
    if (chkMode.checked) {
        result = "Credit Bill";
    } else {
        result = "Cash Bill";
    }
    document.getElementById("lblMode").innerHTML = result;
}