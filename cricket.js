// JavaScript source code

function SetPlayers() {
    for (i = 0; i < player; i++) {
        var checks = document.createElement("div");
        checks.className = "checks";
        var main = document.getElementById("MAIN");
        for (j = 0; j < 9; j++) {
            var div = document.createElement("div");
            var id;
            if (j === 0) {
                div.id = "PLAYER" + String(i);
                div.innerHTML = '<input type="text" value="Player' + String(i + 1) + '" id="' + String(i) + '" />';
            }
            else if (j === 8) {
                div.id = "SCORE" + String(i);
                div.innerHTML = 0;
            }
            else {
                div.id = "CHECK" + String(j);
                div.className = "check";
                if (j === 7) {
                    id = "BULL-";
                }
                else {
                    id = String(21 - j) + "-";
                }
                id += String(i);
                div.innerHTML = '<img src="Materials/check/0.png" id=' + id + ' />';
            }
            //console.log(div);
            checks.appendChild(div);
        }
        //console.log(checks);
        main.appendChild(checks);
    }
    document.getElementById("PLAYER0").style.background = "gold";
}

var Pcount = 0;
var Hcount = [];
var scores = [];

for (i = 0; i < player; i++) {
    Hcount[i] = [];
    scores[i] = 0;
    for (j = 0; j < 7; j++) {
        Hcount[i][j] = 0;
    }
}
//console.log(Hcount);

function next() {
    Pcount++;
    if (Pcount === player) {
        Pcount = 0;
        turn++;
        console.log(turn);
        if (turn === 21) {
            var win = 0;
            for (i = 1; i < player; i++) {
                if (scores[win] < scores[i]) {
                    win = i;
                }
            }
            fin(win);
        }
        document.getElementById("TITLE").innerHTML = "(TURN:" + turn + ")";
    }
    for (i = 0; i < player; i++) {
        var color = "none";
        if (i === Pcount) {
            color = "gold";
        }
        document.getElementById("PLAYER" + String(i)).style.background = color;
    }
}

function closed(e) {
    var bool = true;
    for (i = 0; i < player; i++) {
        if (Hcount[i][e] !== 3) {
            bool = false;
            break;
        }
    }
    return bool;
}

function hit(e) {
    var isScore = Hcount[Pcount][e];
    var bool = closed(e);
    //console.log(bool);
    if (isScore !== 3) {
        Hcount[Pcount][e]++;
        for (i = 0; i < Hcount[Pcount].length; i++) {
            var id;
            var num = 20 - i;
            if (i === 6) {
                num = "BULL";
            }
            id = String(num) + "-" + String(Pcount);
            //console.log(document.getElementById(id));
            document.getElementById(id).src = "Materials/check/" + String(Hcount[Pcount][i]) + ".png";
        }
    }
    else {
        var Fin = true;
        for (i = 0; i < 7; i++) {
            if (Hcount[Pcount][i] !== 3) {
                Fin = false;
                break;
            }
        }
        if (Fin) {
            fin(Pcount);
        }
        else if (!bool) {
            var get;
            if (e === 6) {
                get = 25;
            }
            else {
                get = 20 - e;
            }
            scores[Pcount] += get;
            var ID = "SCORE" + String(Pcount);
            document.getElementById(ID).innerHTML = scores[Pcount];
        }
    }    
}

function fin(win){
    var name = document.getElementById(win).value;
    var text = "WINNER:" + name + "\nSCORE:" + scores[win];
    alert(text);
    location.reload();
}
