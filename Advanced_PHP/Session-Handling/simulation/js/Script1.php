
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
$str="";
$str1="The session is destroyed.";
function errorHandler($errno,$errstr)
{

  echo "<font size= '5px' color='red'><b> Error : $errstr </b></font>";
  $myflag=1;
}
if(isset($_POST['value1'])){
  ob_start();
$varOperand1= $_POST["value1"];

function my(){
  if(session_status()==PHP_SESSION_NONE)
  {session_start();} //start the PHP_session function
if(isset($_SESSION['page_count']))
{
     $_SESSION['page_count'] += 1;
}
else
{
     $_SESSION['page_count'] = 1;
}
$cnt= $_SESSION['page_count']-1;
 $str ="You are visitor number" .$cnt;
 return $str;
}
try{
    set_error_handler("errorHandler");
    eval($varOperand1);
  $out1 = ob_get_contents();
    $str=my();
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

else if(strcmp($out1,"The session is destroyed")==0)
{
     echo "$out1";
     echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 2 accomplished.</b></font>";
 }
else {
echo "<br>Your Output: ".$out1 ."<br>";
echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
echo "<br>Required Output :<br>$str<br>OR<br>The session is destroyed";
}
}
}
?>
</body>
</html>
