var l = 1;
var maxCount=0;
var fact_ans = 1;
var num = 0;
function initphp() {
    var i;
    document.getElementById("h6").innerHTML = "";

    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";
        if (i <= 6) {
            document.getElementById("h" + i).style.display = "none";
        }
        if (i <= 18)
            document.getElementById("ht" + i).style.display = "none";

        
    }
    l = 1;
    time1 = setInterval("Timer1()", 1000);

}
function Timer1() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    document.getElementById("l" + l).style.background = "yellow";
    
    if (l == 7)
        document.getElementById("h" + 1).style.display = "inline";
    else if (l == 8)
        document.getElementById("h" + 2).style.display = "inline";
    else if (l == 11)
        document.getElementById("h" + 3).style.display = "inline";
    else if (l == 12) 
        document.getElementById("h" + 4).style.display = "inline";
     else if(l==13)
         document.getElementById("h" + 5).style.display = "inline";
    l++;
     if (l == 16) {
        l = 33;
    }
    
    if (l > 34) {
        clearInterval(time1);
    }
}
function fact(n)
{
    var facto = 1;
    if (n <= 1)
        return facto;
    else
        facto = n * fact(n - 1);
    return facto;


}
function cal() {
    l = 1;
    document.getElementById("h6").style.display = "none";
    
    document.getElementById("num").innerHTML = num;
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";
        if (i <= 6) {
            document.getElementById("h" + i).style.display = "none";
        }
        if (i <= 18)
            document.getElementById("ht" + i).style.display = "none";


    }
    num = parseInt(document.getElementById("h4").value);
    fact_ans = fact(num);
    

     
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";
        if (i <= 6) {
            document.getElementById("h" + i).style.display = "none";
        }
        if (i <= 18)
            document.getElementById("ht" + i).style.display = "none";
    }
    l=1;
    time2 = setInterval("Timer2()", 1000);
    }
   

function Timer2() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    if(l<=15)
    {
        document.getElementById("l" + l).style.background = "yellow";
        
            document.getElementById("ht" + l).style.display = "inline";
    if (l == 7)
        document.getElementById("h" + 1).style.display = "inline";
    else if (l == 8)
        document.getElementById("h" + 2).style.display = "inline";
    else if (l == 11)
        document.getElementById("h" + 3).style.display = "inline";
    else if (l == 12) 
        document.getElementById("h" + 4).style.display = "inline";
    else if(l==13)
        document.getElementById("h" + 5).style.display = "inline";
    l++;
    }
    else
    {
        clearInterval(time2);
        l=16;
        time3 = setInterval("Timer3()", 1000);
    }
   
         
}
function Timer3() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    document.getElementById("l" + l).style.background = "yellow";
    l++;
    if (l == 20)
        l = 29;
    if (l > 29) {
        clearInterval(time3);
        
        maxCount = num;
        l = 20;
        time4 = setInterval("Timer4()", 1000);
    }
}

function Timer4() {
    for (i = 1; i <= 34; i++)
        document.getElementById("l" + i).style.background = "";
    if(l<=34)
    document.getElementById("l" + l).style.background = "yellow";
    l++;
    if (l == 24)
        l = 25;

    if (maxCount != 1) {
        if (l == 27) {
            l = 20;
            maxCount--;
        }
    }
    else {

        
        clearInterval(time4);
        l = 20;
        time5 = setInterval("Timer5()", 1000);
    }
}

function Timer5() {

    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";
    }
    if (l < 25) {
        document.getElementById("l" + l).style.background = "yellow";
        l++;
     }
    else {
        l = 26;
        clearInterval(time5);
        time6 = setInterval("Timer6()", 1000);
         
      }
  }

function Timer6() {
    for (i = 1; i <= 34; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    if(l<=34)
        document.getElementById("l" + l).style.background = "yellow";

    if (l == 30) {
        
        document.getElementById("h6").innerHTML = "Factorial of  " + num + " is " + fact_ans;
        document.getElementById("h6").style.display = 'inline';
        document.getElementById("num1").innerHTML = num;
        document.getElementById("ans").innerHTML = fact_ans;
        document.getElementById("ht16").style.display='inline'
    }
    if (l == 33)
        document.getElementById("ht17").style.display = 'inline'
    if (l == 34)
        document.getElementById("ht18").style.display = 'inline'
    l++;
    if (l > 34) {
        
        clearInterval(time6);

    }
}
