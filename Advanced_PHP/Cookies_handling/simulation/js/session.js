function page2() {
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "table-row";
}
function page1() {
    document.getElementById("t2").style.display = "none";
    document.getElementById("t1").style.display = "table-row";
}
var l,j,k;
function initsession() {
    var i;
    for (i = 1; i <= 31; i++) {
        document.getElementById("l" + i).style.background = "";
    if(i<=23)
        document.getElementById("ht" + i).style.display = "none";
    if(i<=26)
        document.getElementById("mht" + i).style.display = "none";
    }
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("h4").style.display = "none";
    document.getElementById("h5").style.display = "none";
    document.getElementById("lh1").innerHTML = "";
    document.getElementById("lh2").innerHTML = "";
    document.getElementById("lh3").innerHTML = "";
    l = 1; j = 1; k = 1;
    initsessiontimer1 = setInterval("initsessiontimer()", 1000);
}
function initsessiontimer() {
    var i;
    for (i = 1; i <= 31; i++) {
        document.getElementById("l" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
        }
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("h1").style.display = "table-row";
    }
    if (l == 14) {
        document.getElementById("h2").style.display = "table-row";        
    }
    if (l == 15) {
        document.getElementById("h3").style.display = "table-row";
        
    }
    if (l == 16) {
        document.getElementById("h4").style.display = "table-row";        
    }
    if (l == 17) {
        document.getElementById("h5").style.display = "table-row";        
    }
    if (l == 19)
        l = 30;
    if (l==30)
        document.getElementById("ht22").style.display = "inline";
    if(l==31)
        document.getElementById("ht23").style.display = "inline";
    if (l == 5) k = 2;
    if (l == 26) k = 19;
    if (l == 30) k = 22;
    if (l == 17) k = 16;
    if (l == 1 || (l >= 5 && l <= 14) || (l >= 17 && l <= 19))
        document.getElementById("ht" + k).style.display = "inline";
    if (l == 15 || l == 16)
    {
        document.getElementById("ht" + k).style.display = "inline";
        k++;
        document.getElementById("ht" + k).style.display = "inline";
    }
   
    l++; j++; k++;
    if (l > 31)
        clearInterval(initsessiontimer1);
}
var lid;
var uname;
function createsession() {
    var i;
    for (i = 1; i <= 31; i++) {
        document.getElementById("l" + i).style.background = "";
        if (j == 1) {
            if (i <= 21)
                document.getElementById("ht" + i).style.display = "none";
        }
    }
    document.getElementById("lh1").innerHTML = "";
    document.getElementById("lh2").innerHTML = "";
    document.getElementById("lh3").innerHTML = "";
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("h4").style.display = "none";
    document.getElementById("h5").style.display = "none";
    l = 1; k = 1; j = 1;

    if (lid != "" && uname != "") {
        lid = document.getElementById("lid").value;
        uname = document.getElementById("uname").value;
        sucess1 = setInterval("sucess()", 1000);
    }
    else {
        initsessiontimer1 = setInterval("initsessiontimer()", 1000);
    }
}
function sucess() {
    var i;
    for (i = 1; i <= 31; i++) {
        document.getElementById("l" + i).style.background = "";

        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
        }
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 11)  
        document.getElementById("h1").style.display = "table-row";
            
   if (l == 14)
            document.getElementById("h2").style.display = "table-row";
            
   if (l == 15)
       document.getElementById("h3").style.display = "table-row";
      if (l == 16)
       document.getElementById("h4").style.display = "table-row";
     if (l == 17)
       document.getElementById("h5").style.display = "table-row";
  
   if (l == 26) 
       document.getElementById("lh1").innerHTML = "Session variables have been set.";
   if (l == 27) {
       document.getElementById("lh2").innerHTML = "Your login ID is " + lid;
       document.getElementById("ht" + k).innerHTML = "Your login ID is " + lid;
       document.getElementById("ht" + k).style.display = "inline";
   }
   if (l == 28) {
       document.getElementById("lh3").innerHTML = "Your Username is " + uname;
       document.getElementById("ht" + k).innerHTML = "Your login ID is " + uname;
       document.getElementById("ht" + k).style.display = "inline";
   }
   //if (l == 19)
     //  l = 30;
   if (l == 30)
       document.getElementById("ht22").style.display = "inline";
   if (l == 31)
       document.getElementById("ht23").style.display = "inline";
   if (l == 5) k = 2;
   if (l == 26) k = 19;
   if (l == 30) k = 22;
   if (l == 17) k = 16;
   if (l == 1 || (l >= 5 && l <= 14) || (l >= 17 && l <= 19))
       document.getElementById("ht" + k).style.display = "inline";
   if (l == 15) {
       document.getElementById("ht" + k).style.display = "inline";
       k++;
       document.getElementById("ht" + k).innerHTML = "&lt;&lt;td&gt;td&gt;&lt;input type=text name=lid value="+lid+ " /&gt;&lt;/td&gt;&lt;/tr&gt;"
       document.getElementById("ht" + k).style.display = "inline";
   }
   if (l == 16) {
       document.getElementById("ht" + k).style.display = "inline";
       k++;
       document.getElementById("ht" + k).innerHTML = "&lt;td&gt;&lt;input type=text name=uname value="+uname +"/&gt;&lt;/td&gt;&lt;/tr&gt;" 
       document.getElementById("ht" + k).style.display = "inline";
   }

   
   if (l == 30)
       document.getElementById("ht22").style.display = "inline";
   if (l == 31)
       document.getElementById("ht23").style.display = "inline";
   l++; j++; k++; 
    if (l > 31)
        clearInterval(sucess1);
}

function rsessioninit() {
    var i = 1;

    document.getElementById("rh1").style.display = "none";
    document.getElementById("rh2").style.display = "none";
    document.getElementById("rh3").style.display = "none";
    document.getElementById("rh4").style.display = "none";
    document.getElementById("rh5").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    l = 1; k = 1; j = 1;
    document.getElementById("page1").style.display = "none";
    rinittimer1 = setInterval("rinttimer1()", 1000);

}
function rinttimer1() {
    var i = 1;
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        } 
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 1 || (l>=5 && l<=18))
        document.getElementById("mht"+k).style.display = "inline";
    if (l == 11)
        document.getElementById("rh1").style.display = "inline";
    if (l == 13)
        document.getElementById("rh2").style.display = "table-row";
    if (l == 14)
        document.getElementById("rh3").style.display = "table-row";
    if (l == 15)
        document.getElementById("rh4").style.display = "table-row";
    if (l == 17)
        document.getElementById("rh5").style.display = "table-row";
    if (l == 20)
        l = 22;
    if (l == 23)
        l = 25;
    if (l == 26)
        l = 30;
    if (l == 31)
        l = 34;
    l++; k++; j++;
    if (l == 5)
        k = 2;
    if (l == 36)
        document.getElementById("mht26").style.display = "inline";
    if (l == 37)
        document.getElementById("mht27").style.display = "inline";
    if (l > 37)
        clearInterval(rinittimer1);
}
function retrive() {
    var i = 1;

    document.getElementById("rh1").style.display = "none";
    document.getElementById("rh2").style.display = "none";
    document.getElementById("rh3").style.display = "none";
    document.getElementById("rh4").style.display = "none";
    document.getElementById("rh5").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    l = 1; j = 1; k = 1;
    retrivetimer1 = setInterval("retrivetimer()",1000);
}
function retrivetimer() {
    var i = 1;
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 1 || (l >= 5 && l <= 18))
        document.getElementById("mht" + k).style.display = "inline";
    if (l == 11)
        document.getElementById("rh1").style.display = "inline";
    if (l == 13)
        document.getElementById("rh2").style.display = "table-row";
    if (l == 14)
        document.getElementById("rh3").style.display = "table-row";
    if (l == 15)
        document.getElementById("rh4").style.display = "table-row";
    if (l == 17)
        document.getElementById("rh5").style.display = "table-row";
    if (l == 21) {
        document.getElementById("mht" + k).style.display = "inline";
        k++;
        document.getElementById("ph1").innerHTML = "Your login ID is " + lid;
        document.getElementById("mht" + k).innerHTML = "Your login ID is"+lid+ "&lt;br&gt;" ;
        document.getElementById("mht"+k).style.display = "inline";
    }
    if (l == 22) {
        document.getElementById("ph2").innerHTML = "Your Username is " + uname;
        document.getElementById("mht" + k).innerHTML = "Your Username is"+uname+"&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";

    }
    if (l == 23)
        l = 25;
    if (l == 26)
        l = 30;
    if (l == 31)
        l = 35;
    if (l == 36)
        document.getElementById("mht26").style.display = "inline";
    if (l == 37)
        document.getElementById("mht27").style.display = "inline";
    l++; k++; j++;
    if (l == 5)
        k = 2;
    if (l > 37)
        clearInterval(retrivetimer1);
}
function retriveall() {
    var i = 1;

    document.getElementById("rh1").style.display = "none";
    document.getElementById("rh2").style.display = "none";
    document.getElementById("rh3").style.display = "none";
    document.getElementById("rh4").style.display = "none";
    document.getElementById("rh5").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        //if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
       
    }
    l = 1; k = 1; j = 1;
    retrivealltimer1 = setInterval("retrivealltimer()", 1000);
}
function retrivealltimer() {
    var i = 1;
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 1 || (l >= 5 && l <= 18))
        document.getElementById("mht" + k).style.display = "inline";
    if (l == 11)
        document.getElementById("rh1").style.display = "inline";
    if (l == 13)
        document.getElementById("rh2").style.display = "table-row";
    if (l == 14)
        document.getElementById("rh3").style.display = "table-row";
    if (l == 15)
        document.getElementById("rh4").style.display = "table-row";
    if (l == 17)
        document.getElementById("rh5").style.display = "table-row";
    if (l == 20)
        l = 23;
    if (l == 24) {
        document.getElementById("ph1").innerHTML = "You have set following session variables";
        document.getElementById("mht" + k).innerHTML = "You have set following session variables&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
        k++;
        document.getElementById("mht" + k).innerHTML = "Array &lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
    }
    if (l == 25){
        document.getElementById("ph2").innerHTML = lid + " " + uname;
        document.getElementById("mht" + k).innerHTML = "(  [loginID] =>"+lid+"&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
        k++;
        document.getElementById("mht" + k).innerHTML = "[userName] =>"+uname+") &lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
    }
    if (l == 26)
        l = 30;
    if (l == 31)
        l = 34;
    if (l == 36)
        document.getElementById("mht26").style.display = "inline";
    if (l == 37)
        document.getElementById("mht27").style.display = "inline";
    l++; k++; j++;
    if (l == 5)
        k = 2;
    if (l > 37)
        clearInterval(retrivealltimer1);
}
function modify() {
    var i = 1;

    document.getElementById("rh1").style.display = "none";
    document.getElementById("rh2").style.display = "none";
    document.getElementById("rh3").style.display = "none";
    document.getElementById("rh4").style.display = "none";
    document.getElementById("rh5").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (i <= 23)
            document.getElementById("ht" + i).style.display = "none";
        if (i <= 27)
            document.getElementById("mht" + i).style.display = "none";
    }
    l = 1; k = 1; j = 1;
    modifytimer1 = setInterval("modifytimer()", 1000);
}
function modifytimer() {
    var i = 1;
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 1 || (l >= 5 && l <= 18))
        document.getElementById("mht" + k).style.display = "inline";
    if (l == 11)
        document.getElementById("rh1").style.display = "inline";
    if (l == 13)
        document.getElementById("rh2").style.display = "table-row";
    if (l == 14)
        document.getElementById("rh3").style.display = "table-row";
    if (l == 15)
        document.getElementById("rh4").style.display = "table-row";
    if (l == 17)
        document.getElementById("rh5").style.display = "table-row";
    if (l == 20)
     l = 22; 
    if (l == 23)
        l = 25;
    if (l == 21)
        k = 16;
    if (l == 29) {
        k = 22;
        document.getElementById("ph1").innerHTML = "New session variables are :";
        uname = document.getElementById("tid").value;
        document.getElementById("ph2").innerHTML = uname;
        document.getElementById("mht" + k).innerHTML = "New session varaibles are: Array&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
    }
    if (l == 30) {
        k = 23;
        document.getElementById("mht" + k).innerHTML = "(  [loginID] =>" + lid + "&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
        k++;
        document.getElementById("mht" + k).innerHTML = "[userName] =>" + uname + ") &lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
    }
    //if (l == 29)
    //    document.getElementById("ph2").innerHTML = uname;
    if (l == 31)
        l = 34;
    if (l == 36)
        document.getElementById("mht26").style.display = "inline";
    if (l == 37)
        document.getElementById("mht27").style.display = "inline";
    l++; j++; k++;
   // if(l<19 && l>25) k++;
    if (l == 5)
        k = 2;
    if (l > 37)
        clearInterval(modifytimer1);
}
function remove() {
    var i = 1;

    document.getElementById("rh1").style.display = "none";
    document.getElementById("rh2").style.display = "none";
    document.getElementById("rh3").style.display = "none";
    document.getElementById("rh4").style.display = "none";
    document.getElementById("rh5").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (i <= 23)
            document.getElementById("ht" + i).style.display = "none";
        if (i <= 27)
            document.getElementById("mht" + i).style.display = "none";
    }
    l = 1; k = 1; j = 1;
    removetimer1 = setInterval("removetimer()", 1000);
}
function removetimer() {
    var i = 1;
    for (i = 1; i <= 37; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 23)
                document.getElementById("ht" + i).style.display = "none";
            if (i <= 27)
                document.getElementById("mht" + i).style.display = "none";
        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 1 || (l >= 5 && l <= 18))
        document.getElementById("mht" + k).style.display = "inline";
    if (l == 11)
        document.getElementById("rh1").style.display = "inline";
    if (l == 13)
        document.getElementById("rh2").style.display = "table-row";
    if (l == 14)
        document.getElementById("rh3").style.display = "table-row";
    if (l == 15)
        document.getElementById("rh4").style.display = "table-row";
    if (l == 17)
        document.getElementById("rh5").style.display = "table-row";
    if (l == 20)
        l = 22;
    if (l == 23)
        l = 25;
    if (l == 26)
        l = 30;
    if (l == 31) {
        document.getElementById("ph1").innerHTML = "session destroyed";
        lid = "";
        uname = "";
    }
    if (l == 34) {
        k = 25;
        document.getElementById("mht" + k).innerHTML = "Session destroyed&lt;br&gt;";
        document.getElementById("mht" + k).style.display = "inline";
    }
    if (l == 36)
        document.getElementById("mht26").style.display = "inline";
    if (l == 37)
        document.getElementById("mht27").style.display = "inline";
    l++; k++; j++;
    if (l == 5)
        k = 2;
    if (l > 37)
        clearInterval(removetimer1);
}