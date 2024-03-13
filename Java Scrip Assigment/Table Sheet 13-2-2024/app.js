// ============loop============================
document.write(` 
    
<center> <h1>  <font color=yellow>   <table  border "2px" bordercolor=red 
cellpadding= "10px" cellspacing= 5px bgcolor=black> <td> Table </td> </table>` )

var userInput = prompt ("Enter Number");
var userInput1 = prompt ("Enter Number");
var userRange = prompt("Enter Table range");


for ( i = 1;  i<=userRange; i++){

document.write( `
<center> <font color=yellow> 
<table border "2px" bordercolor=red width = "50%"   cellpadding= "10px" cellspacing= 5px bgcolor=black > 
<tr>
<td >${userInput +" "+ "X" + " " + i + " " + " = " + userInput*i+ "<br>"} </td>

<td>${userInput1 +" "+ "X" + " " + i + " " + " = " + userInput1*i + "<br>"} </td>
</tr> 
</table> ` )
}