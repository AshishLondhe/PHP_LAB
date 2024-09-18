
<html>
<head>

</head>
<body>
 <form name="formSubmit" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
 <textarea id="code" name="value1" cols="100" rows="10"><?php echo isset($_POST['value1']) ? $_POST['value1'] : ' '; ?></textarea>
<p> <b> ? &gt; <b/></p>
<input type="Submit" value="Execute" style="background-color:Cyan;color:black;width:150px;height:40px;font-size:16px;" /><br/><br/>
</form>
<?php
$myflag=0;
function errorHandler($errno,$errstr)
{

  echo "<font size= '5px' color='red'><b> Error : $errstr </b></font>";
  $myflag=1;
}
if(isset($_POST['value1'])){
  $str =" ";
  $str1=" ";

  ob_start();
$varOperand1= $_POST['value1'];
try{
  set_error_handler("errorHandler");
  eval($varOperand1);
  $out1 = ob_get_contents();
  //if(isset($_COOKIE['VLAB']))
  $str = "The cookie is set with value 2019";
  //else {
    $str1 = "The cookie is deleted";
  //}
  ob_end_clean();
}catch (Exception $e) {
$myflag=1;
echo "<font size= '5px' color='red'><b>".$e->getmessage()."</font></b>";
}
catch (Error $e) {
$myflag=1;
echo "<font size= '5px' color='red'><b>".$e->getmessage()."</font></b>";
}
if($myflag==0){
if(strcmp($out1,$str)==0)
{

   echo "$out1";
   echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 1 accomplished.</b></font>";
}

else if(strcmp($out1,$str1)==0)
           {
               echo "$out1";
               echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 2 accomplished.</b></font>";
           }
else {
echo "<br>Your Output: ".$out1;
echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
echo "<br>Required Output :<br>$str<br>OR<br>The cookie is deleted<br>";
}
}
}
?>
</body>
</html>
