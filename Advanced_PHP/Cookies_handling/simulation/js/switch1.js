function initphp() {
    var i;
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
        if (i <= 5) {
            document.getElementById("h" + i).style.display = 'none';
        }
        if (i <= 24) {
            document.getElementById("ht" + i).style.display = 'none';
        }
    }
    l = 1;
    var myTable = document.getElementById('tb1');
    myTable.rows[4].cells[0].innerHTML = "";
    time1 = setInterval("Timer1()", 2000);
}

function Timer1() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 23) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
               
        if (l == 7) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 10) {
            document.getElementById("h" + 2).style.display = 'inline';

        }
        else if (l == 11) {
            document.getElementById("h" + 3).style.display = 'inline';
            
        }
        else if (l == 13) {
            document.getElementById("h" + 4).style.display = 'inline';
            
        }
        else if (l == 21) {
            document.getElementById("h" + 5).style.display = 'inline';
            
        }
        l++;
    }
    else {
        clearInterval(time1);
        l = 52;
        time2 = setInterval("Timer2()", 2000);

    }
}
function Timer2() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 53) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time2);
    }
}

var t1;
var t2;
function cal() {
    t1 = document.getElementById('t1').value;
    t2 = document.getElementById('t2').value;
    document.getElementById("val1").innerHTML = t1;
    document.getElementById("val2").innerHTML = t2;
    var myTable = document.getElementById('tb1');
    myTable.rows[4].cells[0].innerHTML = "";
    if (t1.length > 0 && t2.length > 0) {
        var i;
        for (i = 1; i <= 53; i++) {
            document.getElementById("l" + i).style.backgroundColor = "";
        }
            if (i <= 5) {
              document.getElementById("h" + i).style.display = 'none';
             
            }
        l = 1;

        time3 = setInterval("Timer3()", 2000);
    }
    else {
        initphp();
    }
}

function Timer3() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 23) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (l <= 21) {
            document.getElementById("ht" + l).style.display = "inline";
        }
       
        if (l == 7) {
            document.getElementById("h" + 1).style.display = 'inline';
        }
        else if (l == 10) {
            document.getElementById("h" + 2).style.display = 'inline';

        }
        else if (l == 11) {
            document.getElementById("h" + 3).style.display = 'inline';
           
        }
        else if (l == 13) {
            document.getElementById("h" + 4).style.display = 'inline';
           
        }
        else if (l == 21) {
            document.getElementById("h" + 5).style.display = 'inline';
           
        }
        l++;
    }
    else {
        clearInterval(time3);
        l = 24;
        time4 = setInterval("Timer4()", 2000);

    }
}
function Timer4() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 31) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        clearInterval(time4);
        if (document.getElementById('list1').value == '+') {
            l = 32;
            document.getElementById("plus").innerHTML = 'selected = "selected"';
            document.getElementById("minus").innerHTML = "";
            document.getElementById("mult").innerHTML = "";
            document.getElementById("div").innerHTML = "";

            time5 = setInterval("Timer5()", 2000);
           
        }
        else if (document.getElementById('list1').value == '-') {
            l = 35;
            document.getElementById("minus").innerHTML = 'selected = "selected"';
            document.getElementById("plus").innerHTML ="";            
            document.getElementById("mult").innerHTML = "";
            document.getElementById("div").innerHTML = "";
            time6 = setInterval("Timer6()", 2000);
           
        }
        else if (document.getElementById('list1').value == '*') {
            l = 38;
            document.getElementById("mult").innerHTML = 'selected = "selected"';
            document.getElementById("plus").innerHTML ="";
            document.getElementById("minus").innerHTML = "";
            document.getElementById("div").innerHTML = "";
            time7 = setInterval("Timer7()", 2000);
           
        }
        else if (document.getElementById('list1').value == '/') {
            l = 41
            document.getElementById("div").innerHTML = 'selected = "selected"';
            document.getElementById("plus").innerHTML = "";
            document.getElementById("minus").innerHTML = "";
            document.getElementById("mult").innerHTML = "";

            time8 = setInterval("Timer8()", 2000);
            
        }
    }

}
function Timer5() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 33) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        var myTable = document.getElementById('tb1');
        myTable.rows[4].cells[0].innerHTML = "The addition is " + (parseFloat(document.getElementById('t1').value) + parseFloat(document.getElementById('t2').value));
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        document.getElementById("ans").innerHTML = "The addition is " + (parseFloat(document.getElementById('t1').value) + parseFloat(document.getElementById('t2').value));
        document.getElementById("ht22").style.display = 'inline';
        clearInterval(time5);
        l = 50;
      
        time9 = setInterval("Timer9()", 2000);
    }
}
function Timer6() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 36) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        var myTable = document.getElementById('tb1');
        myTable.rows[4].cells[0].innerHTML = "The substraction is " + (parseFloat(document.getElementById('t1').value) - parseFloat(document.getElementById('t2').value));
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        document.getElementById("ans").innerHTML = "The substraction is " + (parseFloat(document.getElementById('t1').value) - parseFloat(document.getElementById('t2').value));
        document.getElementById("ht22").style.display = 'inline';
        clearInterval(time6);
        l = 50;
       
        time9 = setInterval("Timer9()", 2000);
    }
}
function Timer7() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 39) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        l++;
    }
    else {
        var myTable = document.getElementById('tb1');
        myTable.rows[4].cells[0].innerHTML = "The multiplication is " + (parseFloat(document.getElementById('t1').value) * parseFloat(document.getElementById('t2').value));
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        document.getElementById("ans").innerHTML = "The multiplication is " + (parseFloat(document.getElementById('t1').value) * parseFloat(document.getElementById('t2').value));
        document.getElementById("ht22").style.display = 'inline';
        clearInterval(time7);
        l = 50;
       
        time9 = setInterval("Timer9()", 2000);
    }
}
function Timer8() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    if (l <= 49) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
        if (parseFloat(document.getElementById('t2').value) == 0) {
            l = 46;
            myTable.rows[4].cells[0].innerHTML = "Division not possible Division by zero Error";
            l = 50;
           
            time9 = setInterval("Timer9()", 2000);
        }
        else {
            l++;
            if (l == 44) {
                var myTable = document.getElementById('tb1');
                myTable.rows[4].cells[0].innerHTML = "The Division  is " + (parseFloat(document.getElementById('t1').value) / parseFloat(document.getElementById('t2').value));
                document.getElementById("l" + l).style.backgroundColor = "yellow";
                document.getElementById("ans").innerHTML = "The Division  is " + (parseFloat(document.getElementById('t1').value) / parseFloat(document.getElementById('t2').value));
                document.getElementById("ht22").style.disply = 'inline';
                l = 48;
            }
        }
    }
    else{
        clearInterval(time8);
      
        l = 50;
        time9 = setInterval("Timer9()", 2000);
    }
}
k = 23;
function Timer9() {
    for (i = 1; i <= 53; i++) {
        document.getElementById("l" + i).style.backgroundColor = "";
    }
    
    if (l <= 53) {
        document.getElementById("l" + l).style.backgroundColor = "yellow";
    if(l >=52)
            document.getElementById("ht" + k).style.display = 'inline'
    l++;
    k++;
       
    }
    else {
        clearInterval(time9);

    }
}