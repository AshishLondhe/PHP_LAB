var l = 1;
var count = 1;
var t1;
var t2;
var f;
var ii = 1;
var maxcount;
var k;
function cal() {
    var myTable = document.getElementById('tb1');
    myTable.rows[3].cells[0].innerHTML = "";
    t1 = document.getElementById("t1").value;
    t2 = document.getElementById("t2").value;
    document.getElementById("v1").innerHTML = t1;
    document.getElementById("v2").innerHTML = t2;

    if (t1.length > 0 && t2.length > 0) {
        var x = parseFloat(t1);
        var y = parseInt(t2);
        f = 1;
        maxcount = y;
        while (y >= 1) {
            f = f * x;
            y--;
        }

    }
    var i;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 7) {
            document.getElementById("h" + i).style.display = 'none';
        }
    }
    k = 1;
    l = 1;
   time3 = setInterval("Timer3()", 1000);
   
}
function initphp() {
    var i;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 7) {
            document.getElementById("h" + i).style.display = 'none';
        }
        if(i<=18)
        {
            document.getElementById("ht" + i).style.display = 'none';
        }
    }
    l = 1;
   
    time1 = setInterval("Timer1()", 1000);
}
function Timer1() {
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 15) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (l == 7) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 8) {
            document.getElementById("h" + 2).style.display = 'inline';
        }
        else if(l==11){
            document.getElementById("h" + 3).style.display = 'inline';
            document.getElementById("h" + 4).style.display = 'inline';
            }
        else if (l == 12) {
            document.getElementById("h" + 5).style.display = 'inline';
            document.getElementById("h" + 6).style.display = 'inline';
        }
        else if (l == 13) {
            document.getElementById("h" + 7).style.display = 'inline';
        }
        l++;
    }
    
    else {
        clearInterval(time1);
        l = 31;
        time2 = setInterval("Timer2()", 1000);

    }
}
function Timer2() {
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 32) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time2);
    }
}
function Timer3() {

    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 15) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        document.getElementById("ht" + k).style.display = 'inline';
        if (l == 7) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 8) {
            document.getElementById("h" + 2).style.display = 'inline';
        }
        else if (l == 11) {
            document.getElementById("h" + 3).style.display = 'inline';
            document.getElementById("h" + 4).style.display = 'inline';
            
        }
        else if (l == 12) {
            document.getElementById("h" + 5).style.display = 'inline';
            document.getElementById("h" + 6).style.display = 'inline';
        }
        else if (l == 13) {
            document.getElementById("h" + 7).style.display = 'inline';
        }
        l++;
        k++;
    }

    else {
        clearInterval(time3);
        l = 16;
        if (t1.length > 0 && t2.length > 0) {
            time4 = setInterval("Timer4()", 1000);
        }
        else {
            l = 31;
            time2 = setInterval("Timer2()", 1000);

        }


    }
}
function Timer4() {
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 16) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time4);
        if (t1.length > 0 && t2.length > 0) {
            l = 17;
            ii = 1;
            count = 1;
            time5 = setInterval("Timer5()", 1000);
        }
    }
}
function Timer5() {
    var i;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";

    l++;
    if (l > 27) {
        l = 23;
        count++;
        if (count > maxcount) {
            clearInterval(time5);
            l = 28;
            k = 16;
            time6 = setInterval("Timer6()", 1000);
        }
    }
}
function Timer6() {
    var i;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if(k<=18)
    document.getElementById("ht" + k).style.display='inline';

    var myTable = document.getElementById('tb1');
    myTable.rows[3].cells[0].innerHTML = "The Answer is " + f;
    document.getElementById('a1').innerHTML = "The Answer is "+ f;
    l++;
    k++;
    if (l > 32) {
        clearInterval(time6);
    }
}