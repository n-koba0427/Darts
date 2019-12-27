// JavaScript source code
var PS = [false, false, false, false];

function PlayerSelect(e) {
    PS = [false, false, false, false];
    PS[e] = true;
    for (i = 0; i < PS.length; i++) {
        var picture;
        if (PS[i]) {
            picture = "Materials/nums/" + String(i + 1) + "b.png";
        }
        else {
            picture = "Materials/nums/" + String(i + 1) + ".png";
        }
        document.getElementById(i).src = picture;
    }
    console.log(PS);
    SBColor();
}


var MS = [false,false,false];

function ModeSelect(e) {
    MS = [false, false, false];
    MS[e] = true;
    for (i = 0; i < MS.length; i++) {
        var id = "mode" + String(i);
        var color;
        if (MS[i]) {
            color = "#4dffff";
        }
        else {
            color = "white";
        }
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.borderColor = color;
    }
    console.log(MS);
    SBColor();
}


function check(list) {
    var bool = false;
    for (i = 0; i < list.length; i++) {
        if (list[i]) {
            bool = true;
            break;
        }
    }
    return bool;
}

var start = false;
function SBColor() {
    if (check(PS) && check(MS)) {
        document.getElementById("STARTBUTTON").style.background = "red";
        start = true;
    }
}

function GameStart() {
    if (start) {
        for (i = 0; i < PS.length; i++) {
            if (PS[i]) {
                var player = i + 1;
                sessionStorage.setItem("player", player);
                break;
            }
        }
        var links = ["CountUp.html","01.html","Cricket.html"];
        var link;
        for (i = 0; i < MS.length; i++) {
            if (MS[i]) {
                link = links[i];
                break;
            }
        }
        window.location.href = link;
    }
}
