// ==================Heading==========================

document.write
( "<center>"+
"<font color=yellow>"+
"<table border=3px bordercolor=red  cellpadding=20px cellspacing=10px bgcolor=black> "+
"<tr>"+ 
"<th>"+ "<h1>"+"Java Scrip Class Start 23-Feb-2024 Practic Work"+"</th>"+"</table>"+"<br>")

// ========================Typesof=================================

document.write("<font color=black>"+ "<h2>" + typeof("Name")+("<br>") )
document.write(typeof(12)+("<br>"))
document.write(typeof(true)+("<br>"))
document.write(typeof(12.4444)+("<br>"))

// ===============================Table===============================

document.write(
    "<center>"+
    "<font color=yellow>"+
    "<table border=3px bordercolor=red  cellpadding=20px cellspacing=10px bgcolor=black> "+
    "<tr>"+
    "<th>"+ "First Name"+"</th>"+
    "<th>"+ "Last Name"+"</th>"+
    "<th>"+ "Contact"+"</th>"+
    "<th>"+ "Email"+"</th>"
     +"/<tr>"

    + "<tr>"+
    "<td>"+ "Fuzail"+"</td>"+
    "<td>"+ "Manai"+"</td>"+
    "<td>"+ "0321-2755408"+"</td>"+
    "<td>"+ "Fuzailali49@yahoo.com"+"</td>"
     +"/<tr>"

    +"</table>"
    +"</font>"
    +"</center"
)

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
