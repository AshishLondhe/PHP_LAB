
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
  ob_start();
$varOperand1= $_POST["value1"];

try{
    set_error_handler("errorHandler");
  eval($varOperand1);
  $out1 = ob_get_contents();
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

if(strcmp($out1,"*<br>**<br>***<br>****<br>*****<br>")==0)
{

   echo "$out1";
   echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 1 accomplished.</b></font>";
}

else if(strcmp($out1,"&nbsp;&nbsp;&nbsp;&nbsp;*<br>&nbsp;&nbsp;&nbsp;*&nbsp;*<br>&nbsp;&nbsp;*&nbsp;*&nbsp;*<br>&nbsp;*&nbsp;*&nbsp;*&nbsp;*<br>")==0)
           {
               echo "$out1";
               echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 2 accomplished.</b></font>";
           }
else {
echo "<br>".$out1;
echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
echo "<br>Required Output : <br> *<br>**<br>***<br>****<br>*****<br> <br> OR <br><br> &nbsp;&nbsp;&nbsp;&nbsp;*<br>&nbsp;&nbsp;&nbsp;*&nbsp;*<br>&nbsp;&nbsp;*&nbsp;*&nbsp;*<br>&nbsp;*&nbsp;*&nbsp;*&nbsp;*<br>";
}
}
}
?>
</body>
</html>
