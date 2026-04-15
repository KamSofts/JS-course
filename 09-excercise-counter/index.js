let lngCount = 1;

fnReset();

function fnAdd(){
    lngCount++;
    sbRefresh();
}

function fnLess(){
    lngCount--;
    sbRefresh();
}

function fnReset(){
    lngCount = 1;
    sbRefresh();
}

function sbRefresh(){
    document.getElementById("lblCounter").innerHTML = "" + lngCount;
}