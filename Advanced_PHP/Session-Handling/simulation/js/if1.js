var l,j,k;
function setimg() {
    var imgname = document.getElementsByName("image1");
    document.getElementById("i1").style.display = "none";
    document.getElementById("i2").style.display = "none";
    if (imgname[0].checked == true) {
        l = 1;
        j = 1;
        k = 1;
        time2 = setInterval("Timer2()", 2000);
    }
    else {
        l = 1;
        k = 1;
        j = 1;
        time3 = setInterval("Timer3()", 2000);
    }

}
function initphp() {
    for (i = 1; i <= 25; i++) {
        document.getElementById('l' + i).style.backgroundColor = "";
        if (i <= 6) {
            document.getElementById('h' + i).style.backgroundColor = "";
        }
        if (i <= 2) {
            document.getElementById('i' + i).style.backgroundColor = "";
        }
    }
    l = 1;
    j = 1;
    time1 = setInterval("Timer1()", 2000);

}
function Timer1() {
    for (i = 1; i <= 25; i++) {
        document.getElementById('l' + i).style.backgroundColor = "";
    }
   if (l <= 14 || l >= 23) {
        
        document.getElementById('l' + l).style.background = "yellow";
       
        if (l == 8)
            document.getElementById('h1').style.display = "inline";
        else if (l == 10)
            document.getElementById('h2').style.display = "inline";
        else if (l == 11) {
            document.getElementById("h3").style.display = "inline";
            document.getElementById("h4").style.display = "inline";
        }
        else if (l == 12) {
            document.getElementById("h5").style.display = "inline";
            document.getElementById("h6").style.display = "inline";
        }
        else if (l == 13)
            document.getElementById("h7").style.display = "inline";
       

    }
    if (l == 14)
        l = 23;
    l++;
    j++;
    if (l > 25)
        clearInterval(time1);
}
function Timer2() {
   
    var imgname = document.getElementsByName("image1");
    if (j == 1) {
        for (i = 1; i <= 17; i++)
            document.getElementById("ht" + i).style.display = "none";
        j = 0;
    }
    
    document.getElementById("img_n").innerHTML = "keyboard.jpg";
    document.getElementById("k").innerHTML = "checked=checked";
    document.getElementById("m").innerHTML = " ";
    for (i = 1; i <= 25; i++) {
        document.getElementById('l' + i).style.backgroundColor = "";
        if (i <= 6) {
            document.getElementById('h' + i).style.backgroundColor = "";
        }
}      
    document.getElementById('l' + l).style.background = "yellow";
    if(k<=14  )
    document.getElementById("ht" + k).style.display = "inline";
    if (l == 8)
        document.getElementById('h1').style.display = "inline";
    else if (l == 10)
        document.getElementById('h2').style.display = "inline";
    else if (l == 11) {
        document.getElementById("h3").style.display = "inline";
        document.getElementById("h4").style.display = "inline";
    }
    else if (l == 12) {
        document.getElementById("h5").style.display = "inline";
        document.getElementById("h6").style.display = "inline";
    }
    else if (l == 13)
        document.getElementById("h7").style.display = "inline";
    if (l == 18) {
        k = 15;
        document.getElementById("i1").style.display = "inline";
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l >= 24 && k<=17)
    {
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l == 18)
        l = 20;
    if (l == 23)
        k = 15;
    l++;
    k++;
    
    if (l > 25) {
        clearInterval(time2);
        j = 1;
    }
}

function Timer3() {
    
    var imgname = document.getElementsByName("image1");
    if (j == 1) {
        for (i = 1; i <= 17; i++)
            document.getElementById("ht" + i).style.display = "none";
        j = 0;
    }
    document.getElementById("img_n").innerHTML = "mouse.jpg";
    document.getElementById("k").innerHTML = " ";
    document.getElementById("m").innerHTML = "checked=checked";

    for (i = 1; i <= 25; i++) {
        document.getElementById('l' + i).style.backgroundColor = "";
        if (i <= 6) {
            document.getElementById('h' + i).style.backgroundColor = "";
        }
    }
    document.getElementById('l' + l).style.background = "yellow";
    if (k <= 14)
        document.getElementById("ht" + k).style.display = "inline";
    if (l == 8)
        document.getElementById('h1').style.display = "inline";
    else if (l == 10)
        document.getElementById('h2').style.display = "inline";
    else if (l == 11) {
        document.getElementById("h3").style.display = "inline";
        document.getElementById("h4").style.display = "inline";
    }
    else if (l == 12) {
        document.getElementById("h5").style.display = "inline";
        document.getElementById("h6").style.display = "inline";
    }
    else if (l == 13)
        document.getElementById("h7").style.display = "inline";
    if (l == 20) {
        k = 15;
        document.getElementById("i2").style.display = "inline";
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l >= 24 && k <= 17) {
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l == 17)
        l = 18;
    if (l == 23)
        k = 15;
    l++;
    k++;

    if (l > 25) {
        clearInterval(time3);
        j = 1;
    }
}