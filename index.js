var lotNumbers = [1, 15, 24, 35, 48, 3];

function init() {
    writeLotteryArray(lotNumbers, "goal");
    pick = new Set();
    var i = 0;
    while (i < 5) {

        curr = 1 + Math.floor(Math.random() * 47);
        while (pick.has(curr)) {
            curr = 1 + Math.floor(Math.random() * 47);
        }
        pick.add(curr);
        i++;
    }
    pick = Array.from(pick);
    pick.sort((a, b) => a - b);


    pick.push(1 + Math.floor(Math.random() * 17));
    writeLotteryArray(pick, "pick");
    payoff = calcPayoff(pick);
    document.getElementById("pay").innerHTML = "<h2>Payoff: " + payoff + "</h2>";
}

function writeLotteryArray(arr, elemID) {
    elem = document.getElementById(elemID);
    elem.innerHTML = "<div class=\"pad \"></div>";
    var i = 0;
    for (; i < 5; i++) {
        ins = "";
        if (arr[i] < 10) {
            ins = "&#8192";
        }
        elem.insertAdjacentHTML("beforeend", "<div class=\"numb\">" + arr[i] + ins + "</div>");
    }
    ins = "";
    if (arr[i] < 10) {
        ins = "&#8192";
    }
    elem.insertAdjacentHTML("beforeend", "<div class=\"lucky\">" + arr[i] + ins + "</div>");

}

function calcPayoff(pick) {
    noLucky = ["$0", "$0", "$3", "$20", "$200", "$25,000 a YEAR for LIFE"];
    lucky = ["$4", "$6", "$25", "$150", "$5,000", "$7,000 a WEEK for LIFE"];
    numMatch = 0;
    luckyMatch = pick[5] == lotNumbers[5];
    match = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (pick[i] == lotNumbers[j]) {
                match++;
            }
        }
    }
    if (luckyMatch) {
        return lucky[match];
    } else {
        return noLucky[match];
    }

}
