// =============USER	INPUT	&   CONDITIONAL	STATEMENTS============

// Q1
    // Write a program that takes input a name from user & greet the
    // user like this:

    var userNAme= prompt( "Enter Your Name");
    alert(userNAme)
    alert("Hi Fuzail")

   // ========================================================

     // Q2
     // Write a program to take input a number from user & display
     // it’s multiplication table on your browser. If user does not enter
     // a new number, multiplication table of 5 should be displayed by
     // default.    
    
        var number = +prompt("Enter a number:", 5);
    
        document.write("<h2>Multiplication Table of ", number, "</h2>");
    
        document.write(number, " x 1 = ", number * 1, "<br>");
        document.write(number, " x 2 = ", number * 2, "<br>");
        document.write(number, " x 3 = ", number * 3, "<br>");
        document.write(number, " x 4 = ", number * 4, "<br>");
        document.write(number, " x 5 = ", number * 5, "<br>");
        document.write(number, " x 6 = ", number * 6, "<br>");
        document.write(number, " x 7 = ", number * 7, "<br>");
        document.write(number, " x 8 = ", number * 8, "<br>");
        document.write(number, " x 9 = ", number * 9, "<br>");

        document.write(number, " x 10 = ", number * 10);
    
    // ========================================================

        // Q3.
        //  Write a program to take “city” name as input from user. If user
        // enters “Karachi”, welcome the user like this: “Welcome to city
        // of lights”

        var Cityname = prompt("Enter Your City ")
        if ( Cityname === "karachi" ){
              alert( ` Welcome to city of light`)
            }

    // ========================================================


        // Q4
        // Write a program to take “gender” as input from user. If the
        // user is male, give the message: Good Morning Sir. If the user is
        // female, give the message: Good Morning Ma’am.

        var Gender = prompt( "Enter Gender");

        if ( Gender === "male"){
            alert(`Good Morning Sir`)

        }
        
        if( Gender=== "female"  ){
            alert(`Good Morning Ma'am`)
        }
        else{
            alert(`Kon hai tw`)
        }

    // ========================================================

        // Q5. Write a program to take input color of road traffic signal from
        // the user & show the message according to this table:

        var Color = prompt( "Enter Color");
        var Color1 = prompt( "Enter Color");
        var Color2 = prompt( "Enter Color");
        
        if( Color === "red") {
            if( Color1 === "yellow"){
                if( Color2 === "green"){
                    
                    
                    document.write(`
                    <table Center border "1px" width="50%"  > 
                    <tr> <th> Signal Color </th>
                    <th> Message </th> 
                    </tr> 
                    <tr>
                    <td> ${Color} </td>
                    <td> Vehicles Must Stop  </td>
                    </tr>
                    <tr>
                    <td> ${Color1} </td>
                    <td> Vehicles Should Get Ready To Move </td>  
                    </tr>
                    <tr>
                    <td> ${Color2} </td>
                    <td> Vehicles can Move now </td>  
                    </tr>
                    </table>`)
        }     
            
        }

        }
        
    // ========================================================

            

    
        