var dbname = "";
var l,k,j;

function createdb() {
    document.getElementById("dh3").innerHTML = "";
    if (dbname != "testDB") {
        dbname = "testDB";
        document.getElementById("b2").style.display = "inline";
        //document.getElementById("page1").style.display = "inline";
        var i = 1;
        for (i = 1; i <= 2; i++) {
            document.getElementById("dh" + i).style.display = "none";
        }
        for (i = 1; i <= 17; i++)
        {
            document.getElementById("ht"+i).style.display = "none";
        }
        l = 1; k = 1; j = 1;
        db2 = setInterval("setdb()", 500);


    }
    else {
        var i = 1;
        //document.getElementById("page1").style.display = "none";
        for (i = 1; i <= 2; i++) {
            document.getElementById("dh" + i).style.display = "none";
        }
        for (i = 1; i <= 17; i++) {
            document.getElementById("ht" + i).style.display = "none";
        }
        l = 1; k = 1; j = 1;
        db3 = setInterval("setdb1()", 500);
    }
}
function setdb() {
    var i = 1;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.background = "";
    }
    if (j == 1) {
        if (i <= 17)
            document.getElementById("ht" + i).style.display = "none";
    }
   // document.getElementById("page1").style.display = "none";
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("dh1").style.display = "inline";
    }
    if (l == 14) {
        document.getElementById("dh2").style.display = "inline";
    }
    if (l == 23) {
        l = 24;
    }
    if (l == 27) {
        l = 29; k = 14;
        document.getElementById("dh3").innerHTML = "Database testDB is created";
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l == 31) {
        k = 16;
    }
    if (l == 5) { k = 2; }
    if (l == 1 || (l >= 5 && l <= 16) || (l == 31) || (l == 32))
        document.getElementById("ht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 32) {

        clearInterval(db2);
    }
}
function setdb1() {
    var i = 1;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.background = "";
        if (j == 1) {
            if (i <= 17)
                document.getElementById("ht" + i).style.display = "none";
        }
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("dh1").style.display = "inline";
    }
    if (l == 14) {
        document.getElementById("dh2").style.display = "inline";
    }
    if (l == 23) {
        l = 24;
    }
    if (l == 26) {
        l = 27;
    }
    if (l == 28) {
        k = 15;
        document.getElementById("dh3").innerHTML = "ERROR: Could not execute query:CREATE DATABASE testDB Database already exist";
        document.getElementById("ht" + k).style.display = "inline";
    }
    if (l == 31) {
        k = 16;
    }
    if (l == 5) { k = 2; }
    if (l == 1 || (l >= 5 && l <= 16) || (l == 31) || (l == 32))
        document.getElementById("ht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 32) {

        clearInterval(db3);
    }
}
function dbinitphp() {
   cpage();
    document.getElementById("dh3").innerHTML = "";
    var i = 1;
    for (i = 1; i <= 2; i++) {
        document.getElementById("dh" + i).style.display = "none";
    }
    l = 1; k = 1; j++;
    db1 = setInterval("dbphp()", 500);

}
function dbphp() {
    var i;
    for (i = 1; i <= 32; i++) {
        document.getElementById("l" + i).style.background = "";
        if (j == 1) {
            if (i <= 17)
                document.getElementById("ht" + i).style.display = "none";
        }
    }
    document.getElementById("l" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("dh1").style.display = "inline";
    }
    if (l == 14) {
        document.getElementById("dh2").style.display = "inline";
    }
    if (l == 18) {
        l = 29;
    }
    if (l == 31) {
        k = 16;
    }
    if (l == 5) { k = 2;}
    if (l == 1 || (l >= 5 && l <= 16) || (l == 31) || (l == 32))
        document.getElementById("ht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 32) {

        clearInterval(db1);
    }
}
function cpage() {
    document.getElementById("t1").style.display = "table-row";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "none";
    document.getElementById("t6").style.display = "none";
    for (i = 2; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}

function tpage() {
    document.getElementById("t2").style.display = "table-row";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "none";
    document.getElementById("t6").style.display = "none";
    for (i = 1; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}
function ipage() {
    document.getElementById("t3").style.display = "table-row";
document.getElementById("page1").style.display = "table-row"
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "none";
    document.getElementById("t6").style.display = "none";
    for (i = 1; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}
function dpage() {
    document.getElementById("t4").style.display = "table-row";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("t5").style.display = "none";
    document.getElementById("t6").style.display = "none";
    for (i = 1; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}
function mpage() {
    document.getElementById("t5").style.display = "table-row";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t6").style.display = "none";
    for (i = 1; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}
function delpage() {
    document.getElementById("t6").style.display = "table-row";
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "none";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "none";
    for (i = 1; i <= 6; i++){
        document.getElementById("page"+i).style.display = "none";
    }
}

function inittable() {
    var i;

    for (i = 1; i <= 34; i++) {
        document.getElementById("m" + i).style.background = "";
    }
    document.getElementById("th1").style.display = "none";
    document.getElementById("th2").style.display = "none";
    document.getElementById("th3").innerHTML = "";
    document.getElementById("page2").style.display = "inline";
    l = 1; k = 1; j = 1;
    tabletimerinit1 = setInterval("tabletimerinit()", 500);

}
function tabletimerinit() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
        }
        
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("th1").style.display = "inline";
    }
    if (l ==14) {
        document.getElementById("th2").style.display = "inline";
    }
    if (l == 18) {
        l = 31;
    }
    if (l == 33) {
        k = 16;
    }
    if (l == 5) { k = 2; }
    if (l == 1 || (l >= 5 && l <= 16) || (l == 33) || (l == 34))
        document.getElementById("mht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 34) {
        clearInterval(tabletimerinit1);
    }
}
var ctable = "";
function createtable() {
    document.getElementById("th3").innerHTML = "";
    if (ctable != "cars") {
        ctable = "cars";
        document.getElementById("b3").style.display = "inline";
        document.getElementById("b4").style.display = "inline";
        document.getElementById("b5").style.display = "inline";
        document.getElementById("b6").style.display = "inline";
        l = 1; j = 1; k = 1;
        var i;
        for (i = 1; i <= 34; i++) {
            document.getElementById("m" + i).style.background = "";
           // if(j==1)           
           // {
                if (i <= 17)
                {
                    document.getElementById("ht" + i).style.display = "none";
                    document.getElementById("mht" + i).style.display = "none";
                }
           // }
        }
        document.getElementById("th1").style.display = "none";
        document.getElementById("th2").style.display = "none";
        document.getElementById("th3").innerHTML = "";
        sucesstimertable1 = setInterval("sucesstimertable()", 500);
    }
    else {
        l = 1; j = 1; k = 1;
        var i;
        for (i = 1; i <= 34; i++) {
            document.getElementById("m" + i).style.background = "";
            //if(j==1){
                if (i <= 17){
                    document.getElementById("ht" + i).style.display = "none";
                    document.getElementById("mht" + i).style.display = "none";
                }
           // }
            
        }
        document.getElementById("th1").style.display = "none";
        document.getElementById("th2").style.display = "none";
        document.getElementById("th3").innerHTML = "";
        failtimertable1 = setInterval("failtimertable()", 500);
    }
}

function sucesstimertable() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("m" + i).style.background = "";
        if(j==1)
        {
            if (i <= 17){
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            
        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("th1").style.display = "inline";
    }
    if (l ==14) {
        document.getElementById("th2").style.display = "inline";
    }
    if (l == 27) {
        document.getElementById("th4").style.display = "table-row";
        document.getElementById("th5").style.display = "table-row";
    }
    if (l == 28) {
        document.getElementById("th3").innerHTML = "Table 'Cars' is created"
    }
    if (l == 24) {
        l = 25;
    }
    if (l == 29) {
        k=14;
        document.getElementById("th3").innerHTML = document.getElementById("th3").innerHTML + " with fields: name, horsepower, weight, acceleration";
        document.getElementById("mht" + k).style.display = "inline";
            l = 30;
    }
    if (l == 33) {
        k = 16;
    }
    if (l == 5) { k = 2; }
    if (l == 1 || (l >= 5 && l <= 16) || (l == 33) || (l == 34))
        document.getElementById("mht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 34) {
        clearInterval(sucesstimertable1);
    }
}
function failtimertable() {
    var i;
    for (i = 1; i <= 34; i++) {
        document.getElementById("m" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }

        }
    }
    document.getElementById("m" + l).style.background = "yellow";
    if (l == 11) {
        document.getElementById("th1").style.display = "inline";
    }
    if (l == 14) {
        document.getElementById("th2").style.display = "inline";
    }
    if (l == 30) {
        document.getElementById("th3").innerHTML = "ERROR: Could not execute query:CREATE TABLE Cars (name VARCHAR(30) NOT NULL PRIMARY KEY ...)Table alredy exist"
        k = 15;
        document.getElementById("mht" + k).style.display = "inline";
    }
    if (l == 27) {

        l = 29;
    }
    if (l == 24) {
        l = 25;
    }
    if (l == 33) {
        k = 16;
    }
    if (l == 5) { k = 2; }
    if (l == 1 || (l >= 5 && l <= 16) || (l == 33) || (l == 34))
        document.getElementById("mht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 34) {
        clearInterval(failtimertable1);
    }
}
var cname = [];
var hp = [];
var wt = [];
var acc = [];
function initinsert() {
    var i;
    document.getElementById("ih1").style.display = "none";
    document.getElementById("ih2").style.display = "none";
    document.getElementById("ih3").style.display = "none";
    document.getElementById("ih4").style.display = "none";
    document.getElementById("ih5").style.display = "none";
    document.getElementById("ih6").style.display = "none";
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (i <= 17) {
            document.getElementById("ht" + i).style.display = "none";
            document.getElementById("mht" + i).style.display = "none";
        }
        if (i <= 23) {
            document.getElementById("llht" + i).style.display = "none";
        }
    }
    document.getElementById("page3").style.display = "inline";
    l = 1; j = 1; k = 1;
    inserttimerinit1 = setInterval("inserttimerinit()", 500);
}
function inserttimerinit() {
    var i;
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("ll" + l).style.background = "yellow";
    if (l == 11)
        document.getElementById("ih1").style.display = "inline";
    if (l == 14) {
        document.getElementById("ih2").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
     }
    if (l == 15){
            document.getElementById("ih3").style.display = "table-row";
            document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML+ "'"+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
        }
    if (l == 16){
            document.getElementById("ih4").style.display = "table-row";
            document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML+ "'"+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
        }
    if (l == 17) {
        document.getElementById("ih5").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 18)
        document.getElementById("ih6").style.display = "table-row";
    if (l == 20) {
        l = 38;
    }
    if (l == 4) k = 1;
    if (l == 38) k = 21;
    if (l == 1 || (l >= 5 && l <= 20) || (l == 39) || (l == 40)) {
        document.getElementById("llht" + k).style.display = "inline";
        if (k >= 14 && k <= 14)
            document.getElementById("llht" + k).innerHTML = "";
    }
    l++; j++; k++;
    if (l > 40) {
        clearInterval(inserttimerinit1);
    }
}
var a1;
var a2;
var a3;
var a4;
var a22;
var a33;
var a44;
var found;
var err;
function insertdata() {
    a1 = document.getElementById("it1").value;
    a2 = document.getElementById("it2").value;
    a3 = document.getElementById("it3").value;
    a4 = document.getElementById("it4").value;
    var i;
    found = 0;
    err = 0;

    a22 = parseInt(a2);
    a33 = parseInt(a3);
    a44 = parseInt(a4);
    if (isNaN(a22) || isNaN(a33) || isNaN(a44)) {
        err = 1;
    }

    if (a1 != "" && a2 != "" && a3 != "" && a4 != "") {
        for (i = 0; i <= cname.length; i++) {
            if (cname[i] == a1) {
                found = 1;
            }
        }
        if (found == 1 || err == 1) {
            insertfoundfail();
        }
        else {
            insertsucess();
        }
    }
    else {
        insertfail();
    }

}
function insertsucess() {
    var i;
    document.getElementById("ih1").style.display = "none";
    document.getElementById("ih2").style.display = "none";
    document.getElementById("ih3").style.display = "none";
    document.getElementById("ih4").style.display = "none";
    document.getElementById("ih5").style.display = "none";
    document.getElementById("ih6").style.display = "none";
    document.getElementById("ih7").innerHTML = ""
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    l = 1; j = 1; k = 1;
    insertsucesstimer1 = setInterval("insertsucesstimer()", 500);
}
function insertsucesstimer() {
    var i;
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("ll" + l).style.background = "yellow";
    if (l == 11)
        document.getElementById("ih1").style.display = "inline";
    if (l == 14) {
        document.getElementById("ih2").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML =" &lt;tr&gt;&lt;td&gt; Enter Car name&lt;/td&gt;&lt;td&gt;&lt;input type=text name= name value=" + "'" + a1 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 15) {
        document.getElementById("ih3").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;td&gt; Enter Car horsepower&lt;/td&gt;&lt;td&gt; &lt;input type=text name=horsepower  value= " + "'"+a22 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 16) {
        document.getElementById("ih4").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;tr&gt;&lt;td&gt; Enter Car weight&lt;/td&gt;&lt;td&gt; &lt;input type=text name=weight  value=" + "'"+a33 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 17) {
        document.getElementById("ih5").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;td&gt; Enter Car acceleration &lt;/td&gt;&lt;td&gt; &lt;input type=text name=acceleration  value=" + "'" + a44 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 18)
        document.getElementById("ih6").style.display = "table-row";
    if (l == 32) {
        cname.push(a1)
        hp.push(a22);
        wt.push(a33);
        acc.push(a44);
        var nrow = document.all('insert1').insertRow();
        var ncell = nrow.insertCell();
        ncell.innerHTML = a1;
        var ncell = nrow.insertCell();
        ncell.innerHTML = a22;
        var ncell = nrow.insertCell();
        ncell.innerHTML = a33;
        var ncell = nrow.insertCell();
        ncell.innerHTML = a44;
    }
    if (l == 33) {
        document.getElementById("ih7").innerHTML = "Row inserted";
        k = 18;
        document.getElementById("llht" + k).style.display = "inline";
        l = 36; k = 21;
    }
    if (l == 27) {
        l = 28;
    }
    if (l == 4) k = 1;
    if (l == 38) k = 21;
    if (l == 1 || (l >= 5 && l <= 20) || (l == 39) || (l == 40))
        document.getElementById("llht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 40) {
        clearInterval(insertsucesstimer1);
    }
}
function insertfoundfail() {
    var i;
    document.getElementById("ih1").style.display = "none";
    document.getElementById("ih2").style.display = "none";
    document.getElementById("ih3").style.display = "none";
    document.getElementById("ih4").style.display = "none";
    document.getElementById("ih5").style.display = "none";
    document.getElementById("ih6").style.display = "none";
    document.getElementById("ih7").innerHTML = ""
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    l = 1; j = 1; k = 1;
    insertfoundtimer1 = setInterval("insertfoundtimer()", 500);
}
function insertfoundtimer() {
    var i;
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("ll" + l).style.background = "yellow";
    if (l == 11)
        document.getElementById("ih1").style.display = "inline";
    if (l == 14) {
        document.getElementById("ih2").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = " &lt;tr&gt;&lt;td&gt; Enter Car name&lt;/td&gt;&lt;td&gt;&lt;input type=text name= name value=" + "'" + a1 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 15) {
        document.getElementById("ih3").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;td&gt; Enter Car horsepower&lt;/td&gt;&lt;td&gt; &lt;input type=text name=horsepower  value= " + "'" + a22 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 16) {
        document.getElementById("ih4").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;tr&gt;&lt;td&gt; Enter Car weight&lt;/td&gt;&lt;td&gt; &lt;input type=text name=weight  value=" + "'" + a33 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 17) {
        document.getElementById("ih5").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = "&lt;td&gt; Enter Car acceleration &lt;/td&gt;&lt;td&gt; &lt;input type=text name=acceleration  value=" + "'" + a44 + "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 18)
        document.getElementById("ih6").style.display = "table-row";
    if (l == 32) {
        l = 33;
    }
    if (l == 34) {
        document.getElementById("ih7").innerHTML = "ERROR: Could not execute query:INSERT INTO Cars (name, horsepower, weight, acceleration) VALUES('";
        document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + a1 + "','" + a22 + "','" + a33 + "','" + a44 + "')";
        k = 19;
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + a1 + "','" + a22 + "','" + a33 + "','" + a44 + "')";
        document.getElementById("llht" + k).style.display = "inline";
                if (err == 1) {
                    document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + "Invalid Data Type";
                    k++;
                    document.getElementById("llht" + k).style.display = "inline";
                    k++;
        }
        else {
                    document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + " " + a1 + " alreay exists";
                    k=k+2;
                    document.getElementById("llht" + k).style.display = "inline";
                    document.getElementById("llht"+k).innerHTML = document.getElementById("llht"+k).innerHTML + " " + a1 + " alreay exists";
        }
    }
    if (l == 27) {
        l = 28;
    }
    if (l == 4) k = 1;
    if (l == 38) k = 21;
    if (l == 1 || (l >= 5 && l <= 20) || (l == 39) || (l == 40))
        document.getElementById("llht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 40) {
        clearInterval(insertfoundtimer1);
    }
}

function insertfail() {
    var i;
    document.getElementById("ih1").style.display = "none";
    document.getElementById("ih2").style.display = "none";
    document.getElementById("ih3").style.display = "none";
    document.getElementById("ih4").style.display = "none";
    document.getElementById("ih5").style.display = "none";
    document.getElementById("ih6").style.display = "none";
    document.getElementById("ih7").innerHTML = ""
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    l = 1; k = 1; j = 1;
    insertfailtimer1 = setInterval("insertfailtimer()", 500);
}
function insertfailtimer() {
    var i;
    for (i = 1; i <= 40; i++) {
        document.getElementById("ll" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("ll" + l).style.background = "yellow";
    if (l == 11)
        document.getElementById("ih1").style.display = "inline";
    if (l == 14) {
        document.getElementById("ih2").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" +a1+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 15) {
        document.getElementById("ih3").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" +a22+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 16) {
        document.getElementById("ih4").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" +a33+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 17) {
        document.getElementById("ih5").style.display = "table-row";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + "'" +a44+ "'/&gt;&lt;/td&gt;&lt;/tr&gt;";
    }
    if (l == 18)
        document.getElementById("ih6").style.display = "table-row";
    if (l == 32) {
        l = 33;
    }
    if (l == 34) {
        document.getElementById("ih7").innerHTML = "ERROR: Could not execute query:INSERT INTO Cars (name, horsepower, weight, acceleration) VALUES('";
        document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + a1 + "','" + a22 + "','" + a33 + "','" + a44 + "')";
        k = 19;
        document.getElementById("llht" + k).innerHTML = "ERROR: Could not execute query:INSERT INTO Cars (name, horsepower, weight, acceleration) VALUES "
        document.getElementById("llht" + k).style.display = "inline";
        document.getElementById("llht" + k).innerHTML = document.getElementById("llht" + k).innerHTML + a1 + "','" + a22 + "','" + a33 + "','" + a44 + "')";
       /// if (err == 1) {
            document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + "Invalid Data Type";
            k++;
            document.getElementById("llht" + k).style.display = "inline";
            k++;
        //}
        //else {
        //    document.getElementById("ih7").innerHTML = document.getElementById("ih7").innerHTML + " Invalid Data Type " ;
        //}
    }
    if (l == 27) {
        l = 28;
    }
    if (l == 4) k = 1;
    if (l == 38) k = 21;
    if (l == 1 || (l >= 5 && l <= 20) || (l == 39) || (l == 40))
        document.getElementById("llht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 40) {
        clearInterval(insertfailtimer1);
    }
}

function displayinit() {
    var i;
    document.getElementById("dish3").innerHTML = "";
    document.getElementById("dish1").style.display = "none";
    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (i <= 17) {
            document.getElementById("ht" + i).style.display = "none";
            document.getElementById("mht" + i).style.display = "none";
        }
        if (i <= 23) {
            document.getElementById("llht" + i).style.display = "none";
        }
        if (i <= 21) {
            document.getElementById("nht" + i).style.display = "none";
        }
    }
    document.getElementById("dh1").style.display = "none";
    document.getElementById("page4").style.display = "inline";
    l = 1; j = 1; k = 1;
    displayinittimer1 = setInterval("displayinittimer()", 500);
}
function displayinittimer() {
    var i;
    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 20)
        l = 21;
    if (l ==8)
        document.getElementById("displayh").style.display = "inline";
    if (l == 11)
        document.getElementById("dish1").style.display = "inline";
    if (l == 22) {
        l = 34;
    }
    if (l == 36) k = 19;
    if ((l >= 1 && l <= 13) || (l == 37) || (l == 38))
        document.getElementById("nht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 38) {
        clearInterval(displayinittimer1);
    }

}

function displayexecute() {
    var i;
    var tbl = document.getElementById("dish2");
    tbl.style.display = "none";
    document.getElementById("dish3").innerHTML = "";
    document.getElementById("dish1").style.display = "none";
    while (tbl.rows.length > 1) {
        tbl.deleteRow(1);
    }
    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "none";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    l = 1; j = 1; k = 1;
    if (cname.length > 0) {
        document.getElementById("dish2").style.display = "table";
       // k = 14;
        document.getElementById("nht" + 14).style.display = "inline";
        document.getElementById("nht" + 15).style.display = "inline";
        displaysucess1 = setInterval("displaysucess()", 500);
    }
    else {
        displayfail();
    }
}
var totaldata;
var loop;
function displaysucess() {
    var i;

    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("displayh").style.display = "inline";
    if (l == 11) {
        document.getElementById("dish1").style.display = "inline";
    }
    if (l == 20)
        l = 21;
    if (l == 36) k = 19;
    if ((l >= 1 && l <= 13) || (l == 37) || (l == 38))
        document.getElementById("nht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 26) {
        clearInterval(displaysucess1);
        l = 27;
        totaldata = cname.length;
        loop = 1;
        displayloop1 = setInterval("displayloop()", 500);
    }


}
function displayloop() {
    var i;

    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    if (loop <= totaldata) {
        document.getElementById("n" + l).style.background = "yellow";
        if (l == 28) {
            //k = 15;
            var nrow = document.all("dish2").insertRow();
            var ncell = nrow.insertCell();
            ncell.innerHTML = cname[loop - 1];
            if (loop == 1) {
                document.getElementById("nht" + 15).innerHTML = "&lt;th&gt;name&lt;/th&gt;&lt;th&gt;horsepower&lt;/th&gt;&lt;th&gt;weight&lt;/th&gt;&lt;th&gt;acceleration&lt;/th&gt;&lt;td&gt;";
                document.getElementById("nht" + 15).style.display = "inline";
            }
            var ncell = nrow.insertCell();
            ncell.innerHTML = hp[loop - 1];
            document.getElementById("nht" + 16).innerHTML = document.getElementById("nht16").innerHTML+ cname[loop - 1] + "&lt;/td&gt;&lt;td&gt;" + hp[loop - 1];
           // document.getElementById("nht" + 16).style.display = "inline";
            var ncell = nrow.insertCell();
            ncell.innerHTML = wt[loop - 1];
            document.getElementById("nht" + 16).innerHTML = document.getElementById("nht" + 16).innerHTML + "&lt;/td&gt;&lt;td&gt;" + wt[loop - 1];
            //document.getElementById("nht" + 16).style.display = "inline";
            //document.getElementById("nht" + 17).style.display = "inline";
            var ncell = nrow.insertCell();
            ncell.innerHTML = acc[loop - 1];
            document.getElementById("nht" + 16).innerHTML = document.getElementById("nht" + 16).innerHTML + "&lt;/td&gt;&lt;td&gt;" + acc[loop - 1];
            document.getElementById("nht" + 16).style.display = "inline";
            document.getElementById("nht" + 17).style.display = "inline";
            //document.getElementById("nht"+16).
        }
    }
    else {
        clearInterval(displayloop1);
        l = 29;
        displayafterloop1 = setInterval("displayafterloop()", 500);
        return;
    }
    if (l == 36) k = 19;
    if ((l >= 1 && l <= 13) || (l == 37) || (l == 38))
        document.getElementById("nht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 28) {
        l = 27;
        loop++;
    }
}
function displayafterloop() {
    var i;

    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 30) {
        l = 31;
    }
    if (l == 32)
        l = 33;
    if (l == 36) k = 19;
    if ((l >= 1 && l <= 13) || (l == 37) || (l == 38))
        document.getElementById("nht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 38)
        clearInterval(displayafterloop1);
}
function displayfail() {
    var i;

    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    l = 1; j = 1; k = 1;
    displayfailtimer1 = setInterval("displayfailtimer()", 500);
}
function displayfailtimer() {
    var i;

    for (i = 1; i <= 38; i++) {
        document.getElementById("n" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("n" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("displayh").style.display = "inline";
    if (l == 11)
        document.getElementById("dish1").style.display = "inline";
    if (l == 20)
        l = 21;
    if (l == 25)
        l = 30;
    if (l == 31) {
        document.getElementById("dish3").innerHTML = "No records matching your query were found.";
        k = 19;
        document.getElementById("nht" + k).style.display = "inline";
    }
    if (l == 32)
        l = 33;
    if (l == 36) k = 19;
    if ((l >= 1 && l <= 13) || (l == 37) || (l == 38))
        document.getElementById("nht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 38)
        clearInterval(displayfailtimer1);
}
function modiinitphp() {
    var i;
    document.getElementById("oh1").style.display = "none";
    document.getElementById("oh2").style.display = "none";
    document.getElementById("oh3").style.display = "none";
    document.getElementById("modih").style.display = "none";
    document.getElementById("ottext").innerHTML = "";
    for (i = 1; i <= 33; i++) {
        document.getElementById("o" + i).style.background = "";
        if (i <= 17) {
            document.getElementById("ht" + i).style.display = "none";
            document.getElementById("mht" + i).style.display = "none";
        }
        if (i <= 23) {
            document.getElementById("llht" + i).style.display = "none";
        }
        if (i <= 21) {
            document.getElementById("nht" + i).style.display = "none";
        }
        if (i <= 19) {
            document.getElementById("oht" + i).style.display = "none";
        }
    }
    document.getElementById("page5").style.display = "inline";
    l = 1; j = 1; k = 1;
    modifytimerinit1 = setInterval("modifyinittimer()", 500);
}
function modifyinittimer() {
    var i;

    for (i = 1; i <= 33; i++) {
        document.getElementById("o" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("o" + l).style.background = "yellow";
    if (l == 8)
    {
        document.getElementById("modih").style.display = "inline";
    }
    if (l == 11)
        document.getElementById("oh1").style.display = "table-row";
    if (l == 12)
        document.getElementById("oh2").style.display = "table-row";
    if (l == 13)
        document.getElementById("oh3").style.display = "table-row";
    if (l == 24)
        l = 29;
    if (l == 31) k = 17;
    if ((l <= 15) || (l == 32) || (l == 33))
        document.getElementById("oht" + k).style.display = "inline";

    l++; j++; k++;
    if (l >33)
        clearInterval(modifytimerinit1);
}
var foundmodi = 0;
function modify() {
    var i;
    for (i = 1; i <= 33; i++) {
        document.getElementById("o" + i).background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("oh1").style.display = "none";
    document.getElementById("oh2").style.display = "none";
    document.getElementById("oh3").style.display = "none";
    document.getElementById("ottext").innerHTML = "";
    var car = document.getElementById("ot1").value;
    for (i = 0; i < cname.length; i++) {
        if (cname[i] == car) {

            foundmodi = 1;
            wt[i] = parseInt(document.getElementById("ot2").value);
            break;
        }
    }
    l = 1; j = 1; k = 1;
    if (foundmodi == 1) {
        modisucess1 = setInterval("modisucess()", 500);
    }
    else {
        modifail1 = setInterval("modifail()", 500);
    }
}
function modisucess() {
    var i;
    for (i = 1; i <= 33; i++) {
        document.getElementById("o" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("o" + l).style.background = "yellow";
    if (l == 8) {
        document.getElementById("modih").style.display = "inline";
    }
    if (l == 11)
        document.getElementById("oh1").style.display = "table-row";
    if (l == 12)
        document.getElementById("oh2").style.display = "table-row";
    if (l == 13)
        document.getElementById("oh3").style.display = "table-row";
    if (l == 27) {
        document.getElementById("ottext").innerHTML = "Record is Updated";
        k = 16;
        document.getElementById("oht" + k).style.display = "inline";
    }
    if (l == 22)
        l = 23;
    if (l == 27)
        l = 28;
    if (l == 31) k = 17;
    if ((l <= 15) || (l == 32) || (l == 33))
        document.getElementById("oht" + k).style.display = "inline";
    l++; k++; j++;
    if (l > 33)
        clearInterval(modisucess1);
}
function modifail() {
    var i;
    for (i = 1; i <= 33; i++) {
        document.getElementById("o" + i).style.background = "";
        if (j == 1) {
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
        }
    }
    document.getElementById("o" + l).style.background = "yellow";
    if (l == 8) {
        document.getElementById("modih").style.display = "inline";
    }
    if (l == 11)
        document.getElementById("oh1").style.display = "table-row";
    if (l == 12)
        document.getElementById("oh2").style.display = "table-row";
    if (l == 13)
        document.getElementById("oh3").style.display = "table-row";
    if (l == 28) {
        document.getElementById("ottext").innerHTML = "ERROR: Could not execute query:UPDATE Cars SET weight=" + document.getElementById("ot2").value + " WHERE name=" + document.getElementById("ot1").value + "record not found";
        k = 17;
        document.getElementById("oht" + k).innerHTML = document.getElementById("oht" + k).innerHTML + document.getElementById("ot2").value + " WHERE name=" + document.getElementById("ot1").value + "record not found";
        document.getElementById("oht" + k).style.display = "inline";
    }
    if (l == 22)
        l = 23;
    if (l == 26)
        l = 27;
    if (l == 31) k = 17;
    if ((l <= 15) || (l == 32) || (l == 33))
        document.getElementById("oht" + k).style.display = "inline";
    l++; j++; k++;
    if (l > 33)
        clearInterval(modifail1);
}
function initdelete() {
    var i;
    for (i = 1; i <= 32; i++){
        document.getElementById("p" + i).style.background = "";
        if (i <= 17) {
            document.getElementById("ht" + i).style.display = "none";
            document.getElementById("mht" + i).style.display = "none";
        }
        if (i <= 23) {
            document.getElementById("llht" + i).style.display = "none";
        }
        if (i <= 21) {
            document.getElementById("nht" + i).style.display = "none";
        }
        if (i <= 19) {
            document.getElementById("oht" + i).style.display = "none";
        }
        if(i<=18){
            document.getElementById("pht" + i).style.display = "none";
       }
    }
    document.getElementById("delh1").style.display = "none";
    document.getElementById("delh2").style.display = "none";
    document.getElementById("delh3").style.display = "none";
    document.getElementById("delh4").innerHTML = "";
    document.getElementById("page6").style.display = "inline";
    l = 1;j=1;k=1;
    deleteinittimer1 = setInterval("deleteinittimer()", 500);
}
function deleteinittimer() {
    var i;
    for (i = 1; i <= 32; i++){
        
        document.getElementById("p" + i).style.background = "";
        if(j==1){
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
            if(i<=18){
                document.getElementById("pht"+i).style.display="none";
            }
        }
    }
    document.getElementById("p" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("delh1").style.display = "table-row";
    if (l == 11)
        document.getElementById("delh2").style.display = "table-row";
    if (l == 12)
        document.getElementById("delh3").style.display = "table-row";
    if (l == 21)
        l = 22;
    if (l == 23)
        l = 28;
    if (l == 30) k = 16;
    if ((l <= 14) || (l == 31) || (l == 32))
        document.getElementById("pht" + k).style.display = "inline";
    l++;j++;k++;
    if (l > 32)
        clearInterval(deleteinittimer1);
}
function deletedata() {
    var i;
    for (i = 1; i <= 32; i++){
        document.getElementById("p" + i).style.background = "";
        if(j==1){
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
            if(i<=18){
                document.getElementById("pht"+i).style.display="none";
            }
        }
    }
    document.getElementById("delh1").style.display = "none";
    document.getElementById("delh2").style.display = "none";
    document.getElementById("delh3").style.display = "none";
    document.getElementById("delh4").innerHTML = "";
    l = 1;j=1;k=1;
    var index = cname.indexOf(document.getElementById("dtext").value);
    if (index > -1) {
        cname.splice(index, 1);
        hp.splice(index, 1);
        wt.splice(index, 1);
        acc.splice(index, 1);
        deletesucess1 = setInterval("deletesucess()", 500);
    }
    else {
        deletefail1 = setInterval("deletefail()", 500);
    }

}
function deletesucess() {
    var i;
    for (i = 1; i <= 32; i++){
        document.getElementById("p" + i).style.background = "";
        if(j==1){
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
            if(i<=18){
                document.getElementById("pht"+i).style.display="none";
            }
        }
    }
    document.getElementById("p" + l).style.background = "yellow";
    if (l ==8)
        document.getElementById("delh1").style.display = "table-row";
    if (l == 11)
        document.getElementById("delh2").style.display = "table-row";
    if (l == 12)
        document.getElementById("delh3").style.display = "table-row";
    if (l == 21)
        l = 22;
    if (l == 26) {
        l = 28;k=15;
        //document.getElementById("delh4").innerHTML = "ERROR: Could not execute query:DELETE FROM Cars WHERE name=" + document.getElementById("dtext").value + " record not found";
        document.getElementById("delh4").innerHTML = "Record deleted from table.";
        document.getElementById("pht"+k).style.display="inline";
    }
    if (l == 30) k = 16;
    if ((l <= 14) || (l == 31) || (l == 32))
        document.getElementById("pht" + k).style.display = "inline";
    l++;j++;k++;
    if (l > 32)
        clearInterval(deletesucess1);
}
function deletefail() {
    var i;
    for (i = 1; i <=32; i++){
        document.getElementById("p" + i).style.background = "";
        if(j==1){
            if (i <= 17) {
                document.getElementById("ht" + i).style.display = "none";
                document.getElementById("mht" + i).style.display = "none";
            }
            if (i <= 23) {
                document.getElementById("llht" + i).style.display = "none";
            }
            if (i <= 21) {
                document.getElementById("nht" + i).style.display = "none";
            }
            if (i <= 19) {
                document.getElementById("oht" + i).style.display = "none";
            }
            if(i<=18){
                document.getElementById("pht"+i).style.display="none";
            }
        }
    }
    document.getElementById("p" + l).style.background = "yellow";
    if (l == 8)
        document.getElementById("delh1").style.display = "table-row";
    if (l == 11)
        document.getElementById("delh2").style.display = "table-row";
    if (l == 12)
        document.getElementById("delh3").style.display = "table-row";
    if (l == 21)
        l =22;
    if (l == 25)
        l = 26;
    if (l == 27) {
        document.getElementById("delh4").innerHTML = "ERROR: Could not execute query:DELETE FROM Cars WHERE name=" + document.getElementById("dtext").value + " record not found";
        //document.getElementById("delh4").innerHTML = "Record deleted from table.";
        k=16;
        document.getElementById("pht"+k).innerHTML = document.getElementById("pht"+k).innerHTML + document.getElementById("dtext").value + " record not found  &lt;br&gt;";
            }
    if (l == 30) k = 16;
    if ((l <= 14) || (l == 31) || (l == 32))
        document.getElementById("pht" + k).style.display = "inline";
    l++;j++;k++;
    if (l > 32)
        clearInterval(deletefail1);
}