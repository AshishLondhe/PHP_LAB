
<html>
<head>
</head>
<body>
 <form name="formSubmit" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
 $number=<input type=text name="v"  value ="<?php echo isset($_POST['v']) ? $_POST['v'] : ' ';?>"> ; //Enter any number.<br>
 //Use the above variable in PHP script.<br>
<textarea id="code" name="value1" cols="100" rows="10"><?php echo isset($_POST['value1']) ? $_POST['value1'] : ' '; ?></textarea>
<p> <b> ? &gt; <b/></p>
<input type="Submit" value="Execute" style="background-color:Cyan;color:black;width:150px;height:40px;font-size:16px;" /><br/><br/>
</form>
<?php
$myflag=0;
$str="";
$str1="";
$str2="";
function errorHandler($errno,$errstr)
{

  echo "<font size= '5px' color='red'><b> Error : $errstr </b></font>";
  $myflag=1;
}
if(isset($_POST['value1'])){
ob_start();
if(isset($_POST['v'])){
  $varOperand1= $_POST["value1"];
  $varOperand1 ="$"."number=".$_POST['v'].";".$varOperand1;
$n=$_POST['v'];
if(is_numeric($_POST['v']))
  $myflag=1;
  else
  $myflag=2;
try{
    set_error_handler("errorHandler");
    if($myflag!=2)
  eval($varOperand1);
  $out1 = ob_get_contents();
  ob_end_clean();
   if($n >21 && $n <30)
     $str1="The number is less than thirty and greater than 21";
   else
   $str1="The number is not less than thirty and greater than 21";
   if($n %2 ==0)
   $str3="Given number is even";
   else {
     $str3="Given number is odd";
   }
   if($n <0)
   {
     $str2="Given number is negative";
   }
   else {
     // code...
     $str2="Given number is positive";
   }

}catch (Exception $e) {
$myflag=1;
echo "<font size= '5px' color='red'><b>".$e->getmessage()."</font></b>";
}
catch (Error $e) {
$myflag=1;
echo "<font size= '5px' color='red'><b>".$e->getmessage()."</font></b>";
}

if($myflag==1){
if(strcmp($out1,$str1)==0)
{

   echo "<br>$out1";
   echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 1 accomplished.</b></font>";;
}
else if(strcmp($out1,$str2)==0)
          {
            echo "$out1";
            echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 2 accomplished.</b></font>";
          }
else if(strcmp($out1,$str3)==0)
          {
            echo "$out1";
            echo  "<br><font size= '5px' color='blue'><b>Great Job ! Task 3 accomplished.</b></font>";
           }
else {
  $str1="The number is less than thirty and greater than 21";
  $str2="Given number is negative OR Given number is positive";
  $str3="Given number is even OR Given number is odd";
echo "<br>Your Output :".$out1;
echo "<br><font size= '5px' color='red'><b>Your Output is not as per the Task.</b></font>";
echo "<br>Required output :<br>$str1<br>OR<br>$str2<br>OR<br>$str3";


}
}
}
}
?>
</body>
</html>
