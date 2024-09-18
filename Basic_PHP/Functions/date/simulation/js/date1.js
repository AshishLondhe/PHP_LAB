var d = new Date
var year = d.getFullYear();
var k;
var month = parseInt(d.getMonth()) + 1;

var day = d.getDate();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var hr = d.getHours();
var mi = d.getMinutes();
var ss = d.getSeconds();
var am;
if (hr >= 12 && hr <= 23) {
    am = "PM";
}
else {
    am = "AM";
}

var l;
function initphp() {
    var i;
    document.getElementById("h5").innerHTML = "";
    for (i = 1; i <= 38; i++) {
        document.getElementById("l" + i).style.background = "";
        if (i <= 4) {
            document.getElementById("h" + i).style.display = "none";
        }
        if(i<=23)
            document.getElementById("ht" + i).style.display = "none";

    }
    l = 1;
    time1 = setInterval("Timer1()", 1000);
}
function Timer1() {
    for (i = 1; i <= 38; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    
    if (l == 7) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 10) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 11) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 18) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 21) {
        l = 37;
    }
    l++;
    if (l == 37)
        k = 22;
    if (l > 38) {
        clearInterval(time1);
    }
}
function Timer2() {
    for (i = 1; i < 39; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
   
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if (l <= 20)
        document.getElementById("ht" + l).style.display = "inline";
    if (l == 7) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 10) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 11) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 18) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 26) {
        var d = new Date
        var year = d.getFullYear();
        var month = parseInt(d.getMonth()) + 1;
        var day = d.getDate();
        document.getElementById("h5").innerHTML = "Date is :" + year + "." + month + "." + day;
        document.getElementById("date_val").innerHTML = "Date is :" + year + "." + month + "." + day;
        document.getElementById("ht21").style.display = 'inline';
        l = 35;
    }

    l++;
    if (l == 37)
       document.getElementById("ht22").style.display = 'inline';
    if (l == 38)
        document.getElementById("ht23").style.display = 'inline';

    if (l > 38) {
        clearInterval(time2);
    }
}
function Timer3() {
    for (i = 1; i < 39; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if (l <= 20)
        document.getElementById("ht" + l).style.display = "inline";
    if (l == 7) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 10) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 11) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 13) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 25) {
        l = 26;
    }
    if (l == 28) {
        var d = new Date
        var year = d.getFullYear();
        var month = parseInt(d.getMonth()) + 1;
        var day = d.getDate();
        document.getElementById("h5").innerHTML = "Today's day   :" + days[d.getDay()];
        document.getElementById("date_val").innerHTML = "Today's day   :" + days[d.getDay()];
        document.getElementById("ht21").style.display = 'inline';
        l = 35;
    }
    
    if (l == 37)
            document.getElementById("ht22").style.display = 'inline';
    if (l == 38)
        document.getElementById("ht23").style.display = 'inline';
    l++;
    if (l > 38) {
        clearInterval(time3);
    }
}
function Timer4() {
    for (i = 1; i <= 38; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if (l <= 20)
        document.getElementById("ht" + l).style.display = "inline";
    if (l == 7) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 10) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 11) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 13) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 25) {
        l = 26;
    }
    else if (l == 27)
        l = 28;
    else if (l == 30) {
        var d = new Date
        var year = d.getFullYear();

        var month = parseInt(d.getMonth()) + 1;

        var day = d.getDate();
        var hr = d.getHours();
        var mi = d.getMinutes();
        var ss = d.getSeconds();
        var am;
        if (hr >= 12 && hr <= 23) {
            am = "PM";
        }
        else {
            am = "AM";
        }
        
        document.getElementById("h5").innerHTML = "Time is:" + hr + ":" + mi + ":" + ss + " " + am;
        document.getElementById("date_val").innerHTML = "Time is:" + hr + ":" + mi + ":" + ss + " " + am;
        document.getElementById("ht21").style.display = 'inline';
        l = 35;
    }
    if (l == 37)
        document.getElementById("ht22").style.display = 'inline';
    if (l == 38)
        document.getElementById("ht23").style.display = 'inline';
    l++;
    
    if (l > 38) {
        clearInterval(time4);
    }
}
function Timer5() {
    for (i = 1; i < 39; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if (l <= 20)
        document.getElementById("ht" + l).style.display = "inline";
    if (l == 2) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 5) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 13) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 15) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 25) {
        l = 26;
    }
    else if (l == 27)
        l = 28;
    else if (l == 29)
        l = 30;
    
    if (l == 32) {
        var d = new Date
        var year = d.getFullYear();

        var month = parseInt(d.getMonth()) + 1;

        var day = d.getDate();
        var hr = d.getHours();
        var mi = d.getMinutes();
        var ss = d.getSeconds();
        var am;
        if (hr >= 12 && hr <= 23) {
            am = "PM";
        }
        else {
            am = "AM";
        }
       
        document.getElementById("h5").innerHTML = "Month is:" + months[d.getMonth()];
        document.getElementById("date_val").innerHTML = "Month is:" + months[d.getMonth()];
        document.getElementById("ht21").style.display = 'inline';
       
        l = 35;
    }
    if (l == 37)
        document.getElementById("ht22").style.display = 'inline';
    if (l == 38)
        document.getElementById("ht23").style.display = 'inline';
    l++;
    if (l == 37)
        k = 22;
    if (l > 38) {
        clearInterval(time5);
    }
}
function Timer6() {
    for (i = 1; i < 39; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";

    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if (l <= 20)
        document.getElementById("ht" + l).style.display = "inline";
    if (l == 7) {
        document.getElementById("h" + 1).style.display = "inline";
    }
    if (l == 10) {
        document.getElementById("h" + 2).style.display = "inline";
    }
    if (l == 11) {
        document.getElementById("h" + 3).style.display = "inline";
    }
    if (l == 13) {
        document.getElementById("h" + 4).style.display = "inline";
    }
    if (l == 25) {
        l = 26;
    }
    else if (l == 27)
        l = 28;
    else if (l == 29)
        l = 30;
    else if (l == 31)
        l = 32;
    if (l == 34) {
        var d = new Date
        var year = d.getFullYear();

        var month = parseInt(d.getMonth()) + 1;

        var day = d.getDate();
        var hr = d.getHours();
        var mi = d.getMinutes();
        var ss = d.getSeconds();
        var am;
        if (hr >= 12 && hr <= 23) {
            am = "PM";
        }
        else {
            am = "AM";
        }
        document.getElementById("h5").innerHTML = "Year is:" + year;
        document.getElementById("date_val").innerHTML = "Year is:" + year;
        document.getElementById("ht21").style.display = 'inline';
        l = 35;
    }
    if (l == 37)
        document.getElementById("ht22").style.display = 'inline';
    if (l == 38)
        document.getElementById("ht23").style.display = 'inline';
    l++;
    if (l > 38) {
        clearInterval(time6);
    }
}
function cal() {
    var v = parseInt(document.getElementById("list1").value);
    var i;
    document.getElementById("h5").innerHTML = "";
    for (i = 1; i <39; i++) {
        document.getElementById("l" + i).style.background = "";
        if (i <= 4) {
            document.getElementById("h" + i).style.display = "none";
        }
    }
    if (v == 1) {
        l = 1;
        document.getElementById("date").innerHTML = 'selected="selected"';
        document.getElementById("day").innerHTML = "";
        document.getElementById("time").innerHTML = "";
        document.getElementById("mon").innerHTML = "";
        document.getElementById("year").innerHTML = "";
        time2 = setInterval("Timer2()", 1000);
    }
    else if (v == 2) {
        l = 1;
        document.getElementById("date").innerHTML = "";
        document.getElementById("day").innerHTML = 'selected="selected"';
        document.getElementById("time").innerHTML = "";
        document.getElementById("mon").innerHTML = "";
        document.getElementById("year").innerHTML = "";
        time3 = setInterval("Timer3()", 1000);
    }
    else if (v == 3) {
        l = 1;
        document.getElementById("date").innerHTML = "";
        document.getElementById("day").innerHTML = "";
        document.getElementById("time").innerHTML = 'selected="selected"';
        document.getElementById("mon").innerHTML = "";
        document.getElementById("year").innerHTML = "";
        time4 = setInterval("Timer4()", 1000);
    }
    else if (v == 4) {
        l = 1;
        document.getElementById("date").innerHTML = "";
        document.getElementById("day").innerHTML = "";
        document.getElementById("time").innerHTML = "";
        document.getElementById("mon").innerHTML = 'selected="selected"';
        document.getElementById("year").innerHTML = "";
        time5 = setInterval("Timer5()", 1000);
    }
    else if (v == 5) {
        l = 1;
        document.getElementById("date").innerHTML = "";
        document.getElementById("day").innerHTML = "";
        document.getElementById("time").innerHTML = "";
        document.getElementById("mon").innerHTML = "";
        document.getElementById("year").innerHTML = 'selected="selected"';
        time6 = setInterval("Timer6()", 1000);
    }
}