var l,j,k;
function initcookies() {
    var i;
    document.getElementById("h1").style.display = "none";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    document.getElementById("page1").style.display="inline";
    document.getElementById("page2").style.display="none";
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.background = "";
        if(i<=20)
		document.getElementById("ht"+ i).style.display="none";
	if(i<=19)
		document.getElementById("nht"+ i).style.display="none";
    }
    //document.getElementById("page1").style.display="none";
    l = 1;k=1;j=1;
    initcookietimer1 = setInterval("initcookietimer()", 500);
}
function initcookietimer() {
    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.background = "";
	if(j==1){
		if(i<=20)
		document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
		document.getElementById("nht"+ i).style.display="none";
	}
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("h1").style.display = "inline";
    if (l == 11) {
        document.getElementById("t1").style.display = "table-row";
        document.getElementById("ht11").innerHTML = document.getElementById("ht11").innerHTML + cname + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 12) {
        document.getElementById("t2").style.display = "table-row";
        document.getElementById("ht12").innerHTML = document.getElementById("ht12").innerHTML + cvalue + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 13)
        document.getElementById("t3").style.display = "table-row";
    if (l == 16)
        l = 27;
    if(l==27) k=18; 
    if(l<=15 || l==28 || l==29)
	document.getElementById("ht"+k).style.display="inline";

    l++;j++;k++;
    if (l > 29)
        clearInterval(initcookietimer1);

}
var cname;
var cvalue;
function cookieset() {
    var i;
    document.getElementById("h1").style.display = "none";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("ph1").innerHTML = "";
    document.getElementById("ph2").innerHTML = "";
    document.getElementById("t3").style.display = "none";
    document.getElementById("page1").style.display="inline";
    document.getElementById("page2").style.display="none";

    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    l = 1;j=1;k=1;
    cname = document.getElementById("cname").value;
    cvalue = document.getElementById("cvalue").value;
    if (cvalue != "" && cname != "") {
        cookiesettimer1 = setInterval("cookiesettimer()", 500);
    }
    else {
        initcookies();
    }

}
function cookiesettimer() {
    var i;
    for (i = 1; i <= 29; i++) {
        document.getElementById("l" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("h1").style.display = "inline";
    if (l == 11) {
        document.getElementById("t1").style.display = "table-row";
        document.getElementById("ht11").innerHTML = document.getElementById("ht11").innerHTML + cname + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
        //documwent.getElementById("ht11").style.display = "inline";
    }
    if (l == 12) {
        document.getElementById("t2").style.display = "table-row";
        document.getElementById("ht12").innerHTML = document.getElementById("ht12").innerHTML + cvalue + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 16)
        document.getElementById("t3").style.display = "table-row";
    if ((l == 21) && (cvalue == "" && cname == ""))
       { l++;j++;k++;}
    else if (l==21)
        l = 23;
    if (l == 22){
        document.getElementById("ph1").innerHTML = "Cookie Named " + cname + " is not set";
	k=18;
        document.getElementById("ht"+k).innerHTML="Cookie Named " + cname + " is not set";
	document.getElementByID("ht"+k).style.display="inline";
    }
    if (l == 24){
        document.getElementById("ph1").innerHTML = "Cookie " + cname + " is set";
	k=16;
	document.getElementById("ht"+ k).innerHTML= "Cookie " + cname + " is set";
	document.getElementById("ht"+ k).style.display="inline";
    }
    if (l == 25){
        document.getElementById("ph2").innerHTML = "Value is " + cvalue;
        k=17;
	document.getElementById("ht"+k).innerHTML="Value is " + cvalue;
	document.getElementById("ht"+k).style.display="inline";
    }
    if(l==27) k=18; 
    if(l<=15 || l==28 || l==29)
	document.getElementById("ht"+k).style.display="inline"; 
    l++;j++;k++;
    if (l > 29)
        clearInterval(cookiesettimer1);

}
var cookname;
function checksetcookies() {
    document.getElementById("sh1").innerHTML = "";
    document.getElementById("sh2").innerHTML = "";
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="inline";
    
    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    l = 1;j=1;k=1;
    checktimer1 = setInterval("checktimer()", 500);

}
function checktimer() {
    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("s1").style.display = "inline";
    if (l == 11) {
        document.getElementById("s2").style.display = "table-row";
        document.getElementById("nht11").innerHTML = document.getElementById("nht11").innerHTML + cookname + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 12)
        document.getElementById("s3").style.display = "table-row";
    if (l == 16)
        l = 22;
    l++;j++;k++;
    if(l==23) k=17;
    if(l<=14 || l==24 || l==25)
	document.getElementById("nht"+k).style.display="inline"; 
    if (l > 25)
        clearInterval(checktimer1);
}
function retrivecookie() {
    document.getElementById("sh1").innerHTML = "";
    document.getElementById("sh2").innerHTML = "";
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="inline";

    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    l = 1;j=1;k=1;
    cookname = document.getElementById("cookname").value;
    if (cookname != "") {
        if (cname == cookname) {
            checksucess();
        }
        else {
            checkfail();
        }
    }
    else {
        checksetcookies();
    }
}
function checksucess() {
    document.getElementById("sh1").innerHTML = "";
    document.getElementById("sh2").innerHTML = "";
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="inline";

    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    l = 1;j=1;k=1;
    checksucesstimer1 = setInterval("checksucesstimer()", 500);

}
function checksucesstimer() {
    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("s1").style.display = "inline";
    if (l == 11) {
        document.getElementById("s2").style.display = "table-row";
        document.getElementById("nht11").innerHTML = document.getElementById("nht11").innerHTML + cookname + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 12)
        document.getElementById("s3").style.display = "table-row";
    if (l == 18)
        l = 19;
    if (l == 20){
        document.getElementById("sh1").innerHTML = "Cookie name " + cookname + " is already set!";
	k=15;
	document.getElementById("nht"+k).innerHTML="Cookie name " + cookname + " is already set!";
	document.getElementById("nht"+k).style.display="inline"; 
    }
    if (l == 21){
        document.getElementById("sh2").innerHTML = "value is: " + cvalue;
	k=16;
	document.getElementById("nht"+k).innerHTML="value is: " + cvalue;
	document.getElementById("nht"+k).style.display="inline"; 
    }
    if(l==23) k=17;
    if(l<=14 || l==24 || l==25)
	document.getElementById("nht"+k).style.display="inline"; 

    l++;j++;k++;
    if (l > 25)
        clearInterval(checksucesstimer1);
}
function checkfail() {
    document.getElementById("sh1").innerHTML = "";
    document.getElementById("sh2").innerHTML = "";
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="inline";

    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    l = 1;j=1;k=1;
    checkfailtimer1 = setInterval("checkfailtimer()", 500);

}
function checkfailtimer() {
    var i;
    for (i = 1; i <= 25; i++) {
        document.getElementById("n" + i).style.background = "";
	if(j==1){
		if(i<=20)
			document.getElementById("ht"+ i).style.display="none";
		if(i<=19)
			document.getElementById("nht"+ i).style.display="none";
    	}
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("s1").style.display = "inline";
    if (l == 11) {
        document.getElementById("s2").style.display = "table-row";
        document.getElementById("nht11").innerHTML = document.getElementById("nht11").innerHTML + cookname + "/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 12)
        document.getElementById("s3").style.display = "table-row";
    if (l == 19) {
        l = 22;
        document.getElementById("sh1").innerHTML = "Cookie name " + cookname + " is not set!";
	k=17;
	document.getElementById("nht"+k).innerHTML="Cookie name " + cookname + " is not set!";
	document.getElementById("nht"+k).style.display="inline"; 
    }
    if(l==23) k=17;
    if(l<=14 || l==24 || l==25)
	document.getElementById("nht"+k).style.display="inline"; 

    l++;j++;k++;
    if (l > 25)
        clearInterval(checkfailtimer1);
}
