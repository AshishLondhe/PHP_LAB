var l = 1;
var count = 1;
var t1;
var t2;
var f1;
var f2;
var ii = 1;
var maxcount;
var sum1;
function cal() {
    t1 = document.getElementById("t1").value;
    var sum = "0,1";
    f1 = 0;
    f2 = 1;

    var i;
    maxcount = parseInt(t1) - 2;



    var myTable = document.getElementById('tb1');
    myTable.rows[2].cells[0].innerHTML = "";

    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 4) {
            document.getElementById("h" + i).style.display = 'none';
        }
    }
    time3 = setInterval("Timer3()", 500);
    l = 1;
}

function initphp() {
    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 4) {
            document.getElementById("h" + i).style.display = 'none';
        }
    }
    l = 1;
    time1 = setInterval("Timer1()", 500);
}
function Timer1() {
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 12) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (l == 2) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 5) {
            document.getElementById("h" + 2).style.display = 'inline';
            document.getElementById("h" + 3).style.display = 'inline';
        }
        else if (l == 8) {
            document.getElementById("h" + 4).style.display = 'inline';
            //document.getElementById("h" + 5).style.display = 'inline';
        }

        l++;
    }
    else {
        clearInterval(time1);
        l = 28;
        time2 = setInterval("Timer2()", 500);

    }
}
function Timer2() {
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 29) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time2);
    }
}
function Timer3() {

    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 12) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (l == 2) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 5) {
            document.getElementById("h" + 2).style.display = 'inline';
            document.getElementById("h" + 3).style.display = 'inline';
        }
        else if (l == 8) {
            document.getElementById("h" + 4).style.display = 'inline';
            //document.getElementById("h" + 5).style.display = 'inline';
        }

        l++;
    }
    else {
        clearInterval(time3);
        l = 13;
        if (t1.length > 0) {
            time4 = setInterval("Timer4()", 500);
        }
        else {
            l = 28;
            time2 = setInterval("Timer2()", 500);

        }


    }
}
function Timer4() {
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 18) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        var myTable = document.getElementById('tb1');
        if (l == 17) {
            myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + '0,';
        }
        else if (l == 18) {
            myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + '1,';
        }

        l++;
    }
    else {
        clearInterval(time4);
        if (t1.length > 0) {
            l = 19;
            ii = 1;
            count = 1;
            time5 = setInterval("Timer5()", 500);
        }
    }
}
function Timer5() {
    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    var myTable = document.getElementById('tb1');
    if (l == 22) {
        sum1 = f1 + f2;
        f1 = f2;
        f2 = sum1;
        myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + sum1 + ',';
        document.getElementById('a1').innerHTML = myTable.rows[2].cells[0].innerHTML;
    }
    l++;
    if (l > 26) {
        l = 19;
        count++;
        if (count > maxcount) {
            clearInterval(time5);
            l = 27;
            time6 = setInterval("Timer6()", 500);
        }
    }
}
function Timer6() {
    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    //var myTable = document.getElementById('tb1');
    //myTable.rows[3].cells[0].innerHTML = "The Answer is " + f;
    l++;
    if (l > 29) {
        clearInterval(time6);
    }
}