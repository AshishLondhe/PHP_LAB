
<html>
<head>
  <style>
      p {
          margin: 0;
          padding: 0;
          font-size: 16px;
      }
  </style>
</head>
<body>
 <form name="formSubmit" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  <p>
$host="localhost";<br>
$user="root";<br>
$password="";<br>
$db="testDB";<br>
$mysqli = new mysqli($host,$user,$password,$db);<br>
if ($mysqli === false) {<br>
  die("ERROR: Could not connect. " .mysqli_connect_error());<br>
}<br>
$sql = <input type = text name ="query" style="height:30px" size=100 value="<?php echo isset($_POST['query']) ? $_POST['query'] : ''; ?>"> ;<br>
if ($mysqli->query($sql) === true) {<br>
echo "Table Created."<br>
}<br>
else   {<br>
  echo "ERROR: Could not execute query: $sql. " . $mysqli->error;<br>
}<br>
$sql = <input type = text name ="query1"  style="height:30px" size=100 value="<?php echo isset($_POST['query1']) ? $_POST['query1'] : ''; ?>"> ;<br>
if ($mysqli->query($sql) === true) {<br>
echo "Row inserted"."&lt;br&gt;";<br>
}<br>
else {<br>
  echo "ERROR: Could not execute query: $sql. " . $mysqli->error;<br>
}<br>
$sql = <input type = text name ="query2"  style="height:30px" size=100 value="<?php echo isset($_POST['query2']) ? $_POST['query2'] : ''; ?>"> ;<br>
if ($mysqli->query($sql) === true) {<br>
echo "Record is updated";<br>
}<br>
else {<br>
  	echo "ERROR: Could not execute query: $sql. " . $mysqli->error;<br>
}<br>
$sql = <input type = text name ="query3"  style="height:30px" size=100 value="<?php echo isset($_POST['query3']) ? $_POST['query3'] : ''; ?>"> ;<br>
if ($mysqli->query($sql) === true) {<br>
echo "Record deleted from table.";<br>
}<br>
else {<br>
  echo "ERROR: Could not execute query: $sql. " . $mysqli->error;<br>
}<br>

</p>

<p> <b> ? &gt; <b/></p>
<input type="Submit" value="Execute" style="background-color:Cyan;color:black;width:150px;height:40px;font-size:16px;" /><br/><br/>
</form>
<?php
$myflag=-1;

$myflag_i=0;
$myflag_c=0;
$myflag_m=0;
$myflag_d=0;
$cnt=0;
$str="";
$str1="";
$str2="";
$str3="";
$create_query="create table Student(Roll_No int ,Name VARCHAR ,class VARCHAR ,Marks int)";
$insert_query1="insert into Student values(1,'abc','FE',55)";
$insert_query2="insert into Student values(2,'def','FE',30)";
$insert_query3="insert into Student values(3,'hig','FE',45)";
$modify_query="update Student set Marks=67 where Roll_No=2";
$delete_query="delete from Student where Roll_No=3";
if(isset($_POST['query'])){

  if(strcasecmp($_POST['query'],$create_query)==0)
  {
  echo "Table Created";
  echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 1 accomplished.</b></font>";
  $myflag_c=1;
}
  else {
    $str="Error in create table query";
    $myflag_c=-1;
  }
}
 if(isset($_POST['query1']))
 {
    if(strcasecmp($_POST['query1'],$insert_query1)==0 && $myflag_c==1)
    {

    echo "Row inserted";
    echo" <table><tr><td>Roll_No.</td><td>Name</td>
      <td>Class</td><td> Marks</td> </tr>
      <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
      </table> <br/>";
      $myflag_i=1;
  }
    else if(strcasecmp($_POST['query1'],$insert_query2)==0)
    {
    $str1="Row inserted";
    echo" <table><tr><td>Roll_No.</td><td>Name</td>
      <td>Class</td><td> Marks</td> </tr>
      <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
      <tr><td>2</td><td>def</td><td>FE</td><td>30</td> </tr>
      </table> <br/>";
    $cnt=2;
    $myflag_i=2;
  }
    else if(strcasecmp($_POST['query1'],$insert_query3)==0)
    {
    $str1="Row inserted";
    echo"<table> <tr><td>Roll_No.</td><td>Name</td>
      <td>Class</td><td> Marks</td> </tr>
      <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
      <tr><td>2</td><td>def</td><td>FE</td><td>30</td> </tr>
      <tr><td>3</td><td>hig</td><td>FE</td><td>45</td> </tr>
      </table> <br/>";
    echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 2 accomplished.</b></font>";
    $myflag_i=3;
  }
    else {
      $str1="Error in insert query";
      $myflag_i=-2;
    }
  }
  if(isset($_POST['query2'])){
  if(strcasecmp($_POST['query2'],$modify_query)==0)
  {
      if ($myflag_i==2 ){
       echo "<br>Record is updated";
       echo"<table> <tr><td>Roll_No.</td><td>Name</td>
         <td>Class</td><td> Marks</td> </tr>
         <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
         <tr><td>2</td><td>def</td><td>FE</td><td>67</td> </tr>
         </table> <br/>";
      echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 3 accomplished.</b></font>";
      $myflag_m=1;
     }
     if($myflag_i==3){
       echo "<br>Record is updated";
       echo"<table> <tr><td>Roll_No.</td><td>Name</td>
         <td>Class</td><td> Marks</td> </tr>
         <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
         <tr><td>2</td><td>def</td><td>FE</td><td>67</td> </tr>
         <tr><td>3</td><td>hig</td><td>FE</td><td>45</td> </tr>
         </table> <br/>";
      echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 3 accomplished.</b></font>";

     }
     else {
       $myflag_m=-3;
     }

  }
  else if(strcmp($_POST['query2'],'')) {
        echo "<br>ERROR: Could not execute query:Empty query";
      }
      else {
    $myflag_m=-3;
  }
}
   if(isset($_POST['query3']))
      {
        if(strcasecmp($_POST['query3'],$delete_query)==0 && $myflag_i==3)
        {
           echo "<br>Record is deleted";
           if($myflag_m==1){
           echo"<table> <tr><td>Roll_No.</td><td>Name</td>
             <td>Class</td><td> Marks</td> </tr>
             <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
             <tr><td>2</td><td>def</td><td>FE</td><td>67</td> </tr>
             </table> <br/>";
           }
           else {
             echo"<table> <tr><td>Roll_No.</td><td>Name</td>
               <td>Class</td><td> Marks</td> </tr>
               <tr><td>1</td><td>abc</td><td>FE</td><td>55</td> </tr>
               <tr><td>2</td><td>def</td><td>FE</td><td>30</td> </tr>
               </table> <br/>";
           }

           echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 4 accomplished.</b></font>";
        }
        else if(strcasecmp($_POST['query3'],'')!=0) {
          $str3="Error in delete query";
          $myflag_d=-4;
        }
    }
if($myflag_c==-1)
{
    echo "<br><font  color='red'><b>ERROR: Could not execute query :create Query </b></font>";
  echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
}
else if($myflag_i==-2)
{
    echo "<br><font  color='red'><b>ERROR: Could not execute query:insert query</b></font>";
  echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";

}
else if($myflag_m==-3)
{
  echo "<br><font  color='red'><b>ERROR: Could not execute query:update query </b></font>";
  echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
}
else if($myflag_d==-4)
{
  echo "<br><font  color='red'><b>ERROR: Could not execute query:delete query </b></font>";
  echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
}
?>
</body>
</html>
