var l = 1;
var k = 1;
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
    document.getElementById("val").innerHTML = t1;
   
    var sum = "0,1";
    f1 = 0;
    f2 = 1;

    var i;
    maxcount = parseInt(t1) - 2;
    var myTable = document.getElementById('tb1');
    myTable.rows[2].cells[0].innerHTML = "";

    var i;
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 5) {
            document.getElementById("h" + i).style.display = 'none';
        }
    }
    k = 1;
    time3 = setInterval("Timer3()", 2000);
    l = 1;
}

function initphp() {
    var i;
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 5) {
            document.getElementById("h" + i).style.display = 'none';
        if(i<=21)
            document.getElementById("ht" + i).style.display = 'none';
        }
    }
    l = 1;
    time1 = setInterval("Timer1()", 2000);
}

function Timer1() {
    
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 16) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        
        if (l == 8) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 9) {
            document.getElementById("h" + 2).style.display = 'inline';
        }
        else if(l==12)
            {
            document.getElementById("h" + 3).style.display = 'inline';
        }
       else if (l == 13) {
        document.getElementById("h" + 4).style.display = 'inline';
        }
    else if(l==14)
        {
        document.getElementById("h" + 5).style.display = 'inline';
        }
            
        l++;
        k++;
        { if (l == 5) k--; }
    }
    else {
        
        clearInterval(time1);
        l = 36;
        time2 = setInterval("Timer2()", 2000);

    }
}
function Timer2() {
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 37) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time2);
    }
}
function Timer3() {
    
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 16) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (k <= 18)
            document.getElementById("ht" + k).style.display = 'inline';
        if (l == 8) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if(l==9)
        {
            document.getElementById("h" + 2).style.display = 'inline';
        }
        else if (l == 12) {
            document.getElementById("h" + 3).style.display = 'inline';
        }
        else if(l==13){
            document.getElementById("h" + 4).style.display = 'inline';
        }
        else if (l == 14) {
            document.getElementById("h" + 5).style.display = 'inline';
           
        }

        l++;
        k++;
        if (l == 4) k--;
    }
    else {
        clearInterval(time3);
        l = 17;
        if (t1.length > 0) {
            time4 = setInterval("Timer4()", 2000);
        }
        else {
            l = 36;
            k = 16;
            time2 = setInterval("Timer2()", 2000);

        }


    }
}
function Timer4() {
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 25) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (k <= 17)
            document.getElementById("ht" + k).style.display = 'inline';
        var myTable = document.getElementById('tb1');
        if (l == 24) {
            myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + '0,';
        }
        else if (l == 25) {
            myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + '1,';
        }

        l++;
    }
    else {
        clearInterval(time4);
        if (t1.length > 0) {
            l = 26;
            ii = 1;
            count = 1;
            time5 = setInterval("Timer5()", 2000);
        }
    }
}
function Timer5() {
    var i;

    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    
   

    var myTable = document.getElementById('tb1');
    if (l == 29) {
        sum1 = f1 + f2;
        f1 = f2;
        f2 = sum1;
        myTable.rows[2].cells[0].innerHTML = myTable.rows[2].cells[0].innerHTML + sum1 + ',';
        document.getElementById('a1').innerHTML = myTable.rows[2].cells[0].innerHTML;
    }
    l++;
    if (l > 33) {
        l = 26;
        count++;
        
        if (count > maxcount) {
            
           
            clearInterval(time5);
            l = 26;
            k = 17;
            time6 = setInterval("Timer6()", 2000);
        }
    }
}
function Timer6() {
    var i;
    for (i = 1; i <= 37; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    document.getElementById("l" + l).style.backgroundColor = "yellow";
    if(k<=19)
    document.getElementById("ht"+ k).style.display = 'inline';
    
    if(l ==26)
        l = 32;
    //var myTable = document.getElementById('tb1');
    //myTable.rows[3].cells[0].innerHTML = "The Answer is " + f;
    l++;
    k++;
    
    if (l > 37) {
        clearInterval(time6);
    }
}