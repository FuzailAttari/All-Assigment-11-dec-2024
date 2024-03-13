// ================Student Date================== 

var Studentname = prompt("Enter Your Name");

// ================SUBJECT NAME ========================

var Eng = +prompt("Enter Eng Marks");
var Math = +prompt("Enter Math Marks");
var Urdu = +prompt("Enter Urdu Marks");
var Computer = +prompt("Enter Computer Marks");
var Total = Eng + Math + Urdu +Computer;
var Percentage= (Total/400)*100;
var Grade;

// ===================Condation============================

if( Percentage >= 80 ){
    Grade = "A+"
}
else if (Percentage >= 70){
    Grade = "A"
}

else if (Percentage >= 60){
    Grade = "B"
}
else if (Percentage >= 50){
    Grade = "C"
}
else{
    Grade = "Fail"
}

// ==============Print ==========================

document.write(

    `<center>
    <font color=yellow>
    <table border=3px bordercolor=red  cellpadding=20px cellspacing=10px bgcolor=black>
    <tr>
        <th>Studen Name</th>
        <th> English </th>
        <th> Math </th>
        <th> Urdu </th>
        <th> Computer </th>
        <th> Total </th>
        <th> Percentage </th>
        <th> Grade </th>
    </tr>
    <tr>
        <td>${Studentname}</td>
        <td>${Eng}</td>
        <td>${Math}</td>
        <td>${Urdu}</td>
        <td>${Computer}</td>
        <td>${Total}</td>
        <td>${Percentage}%</td>
        <td>${Grade}</td>
    </tr>
</table>
</font>
</center
`
)



