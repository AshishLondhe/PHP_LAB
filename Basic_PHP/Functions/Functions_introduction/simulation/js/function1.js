var l = 1;
var maxCount=0;
var sum = 0;
var num = 0;
function initphp() {
    var i;
    document.getElementById("h6").innerHTML = "";

    for (i = 1; i <= 35; i++) {
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
    for (i = 1; i <= 35; i++) {
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
        l = 34;
    }
    
    if (l > 35) {
        clearInterval(time1);
    }
}
function cal() {
    num = parseInt(document.getElementById("h4").value);
    sum = 0;
    document.getElementById("n").innerHTML = num;
     for( i=1;i<=num;i++)
         sum=sum+i;
    for (i = 1; i <= 35; i++) {
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
    for (i = 1; i <= 35; i++) {
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
        clearInterval(Timer2);
        l=16;
        time3 = setInterval("Timer3()", 1000);
    }
   
         
}
function Timer3() {
    var i;
    for (i = 1; i <= 35; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    document.getElementById("l" + l).style.background = "yellow";
    l++;
    if (l == 21)
        l = 30;
    if (l > 30) {
        clearInterval(time3);
        
        maxCount = 0;
        l = 21;
        time4 = setInterval("Timer4()", 1000);
    }
}

    function Timer4() {
        for (i = 1; i <= 35; i++) 
            document.getElementById("l" + i).style.background = "";
        document.getElementById("l" + l).style.background = "yellow";
        l++;
        if (maxCount < num) {
            if (l == 28) {
                l = 24;
                maxCount++;
            }
        }

        else //if (maxCount > num-1)
        {
            for (i = 1; i <= 35; i++) {
                document.getElementById("l" + i).style.background = "";
            }
            l = 24;
            document.getElementById("l" + l).style.background = "yellow";

            clearInterval(time4);
            l = 28;
            time5 = setInterval(Timer5, 1000);
        }
        
        
        
        
    }



function Timer5() {
    for (i = 1; i <= 35; i++) {
        document.getElementById("l" + i).style.background = "";

    }
    if(l<=35)
        document.getElementById("l" + l).style.background = "yellow";

    if (l == 31) {
        document.getElementById("h6").innerHTML = "Summation of 0 to " + num + " is " + sum;
        document.getElementById("h6").style.display = 'inline';
        document.getElementById("num").innerHTML = num;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("ht16").style.display='inline'
    }
    if (l == 34)
        document.getElementById("ht17").style.display = 'inline'
    if (l == 35)
        document.getElementById("ht18").style.display = 'inline'
    l++;
    if (l > 35) {
        clearInterval(time5);
    }
}
