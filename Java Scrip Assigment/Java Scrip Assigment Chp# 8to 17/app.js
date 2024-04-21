// =============USER	INPUT	&   CONDITIONAL	STATEMENTS============

// Q1
    // Write a program that takes input a name from user & greet the
    // user like this:

    // ==================== A N S W E R ===================

    var userNAme= prompt( "Enter Your Name");
    alert(userNAme)
    alert("Hi Fuzail")

   // ============================ Q 2 ============================

     // Q2
     // Write a program to take input a number from user & display
     // it’s multiplication table on your browser. If user does not enter
     // a new number, multiplication table of 5 should be displayed by
     // default.    

        // ==================== A N S W E R ===================
     
        // var number = +prompt("Enter a number:", 5);
    
        // document.write("<h2>Multiplication Table of ", number, "</h2>");
    
        // document.write(number, " x 1 = ", number * 1, "<br>");
        // document.write(number, " x 2 = ", number * 2, "<br>");
        // document.write(number, " x 3 = ", number * 3, "<br>");
        // document.write(number, " x 4 = ", number * 4, "<br>");
        // document.write(number, " x 5 = ", number * 5, "<br>");
        // document.write(number, " x 6 = ", number * 6, "<br>");
        // document.write(number, " x 7 = ", number * 7, "<br>");
        // document.write(number, " x 8 = ", number * 8, "<br>");
        // document.write(number, " x 9 = ", number * 9, "<br>");

        // document.write(number, " x 10 = ", number * 10);
    
    // ========================== Q 3 ==============================

        // Q3.
        //  Write a program to take “city” name as input from user. If user
        // enters “Karachi”, welcome the user like this: “Welcome to city
        // of lights”

        // ==================== A N S W E R ===================

        // var Cityname = prompt("Enter Your City ")
        // if ( Cityname === "karachi" ){
        //       alert( ` Welcome to city of light`)
            // }

    // ========================= Q 4 ===============================


        // Q4
        // Write a program to take “gender” as input from user. If the
        // user is male, give the message: Good Morning Sir. If the user is
        // female, give the message: Good Morning Ma’am.

        // ==================== A N S W E R ===================

        // var Gender = prompt( "Enter Gender");

        // if ( Gender === "male"){
        //     alert(`Good Morning Sir`)

        // }
        
        // if( Gender=== "female"  ){
        //     alert(`Good Morning Ma'am`)
        // }
        // else{
        //     alert(`Kon hai tw`)
        // }

    // =========================== Q 5 =============================

        // Q5. Write a program to take input color of road traffic signal from
        // the user & show the message according to this table:

        // ==================== A N S W E R ===================

        // var Color = prompt( "Enter Color");
        // var Color1 = prompt( "Enter Color");
        // var Color2 = prompt( "Enter Color");
        
        // if( Color === "red") {
        //     if( Color1 === "yellow"){
        //         if( Color2 === "green"){
                    
                    
        //             document.write(`
        //             <table Center border "1px" width="50%"  > 
        //             <tr> <th> Signal Color </th>
        //             <th> Message </th> 
        //             </tr> 
        //             <tr>
        //             <td > ${Color} </td>
        //             <td> Vehicles Must Stop  </td>
        //             </tr>
        //             <tr>
        //             <td> ${Color1} </td>
        //             <td> Vehicles Should Get Ready To Move </td>  
        //             </tr>
        //             <tr>
        //             <td> ${Color2} </td>
        //             <td> Vehicles can Move now </td>  
        //             </tr>
        //             </table>`)
        // }     
            
        // }

        // }
        
    // ========================== Q 6 ==============================

    //    Q6 . Write a program to take input max age & current age from
    //         user. If the current age is less than or equal to max age, show
    //         the message “You are welcome”

        // ==================== A N S W E R ===================

    //         var age = prompt("Enter Your Age");
    //         if(age==="25"){
    //         alert("Welcome to page")
    //         }
    //         else{
    //         alert( "abi bacho ho" )
    //         }

    // =========================== Q 7 =============================
    
    // Q7. Write a program to take input remaining fuel in car (in litres)
    // from user. If the current fuel is less than 0.25litres, show the
    // message “Please refill the fuel in your car”

        // ==================== A N S W E R ===================
    

    //  var remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):");

    //     if (remainingFuel < 0.25) {
    //     alert("Please refill the fuel in your car");
    //     }

    // =========================== Q 8 =============================
    
    // Q8 Run this script, & check whether alert message would be displayed or not.Record the outputs.

        // ==================== A N S W E R ===================

        // var a = 4;
        // if (++a === 5) {
        //     alert("given condition for variable a is true");
        // }

        // var b = 82;
        // if (++b === 83) {
        //     alert("given condition for variab b is true");  
        // }
        // var c = 12;
        // if (++c === 13) {
        //     alert("condition 1 is true");     
        // }
        // if (c === 13) {
        //     alert("condition 2 is true");
        // }
        // if (c++ < 14) {
        //     alert("condition 3 is true"); 
        // }
        // if (c === 14) {
        //     alert("condition 4 is true");
        // }
        // var materialCost = 20000;
        // var laborCost = 2000;
        // var totalCost = materialCost + laborCost;

        // if (totalCost === laborCost + materialCost) {
        //     alert("The cost equals");
        // }
        // if (true) {
        //     alert("True");
        // }
        // if (false) {
        //     alert("False"); //issue thhis
        // }
        // if ("car" < "cat") {
        //     alert("car is smaller than cat");
        // }
        
    // =========================== Q9 =============================

    
        // Write a program to take input the marks obtained in three
        // subjects & total marks. Compute & show the resulting
        // percentage on your page. Take percentage & compute grade as
        // per following table: 

        // ==================== A N S W E R ===================

        // var subject1 = +prompt("Enter marks obtained in subject 1:");
        // var subject2 = +prompt("Enter marks obtained in subject 2:");
        // var subject3 = +prompt("Enter marks obtained in subject 3:");
        // var totalMarks = +prompt("Enter total marks:");
        
        // var obtainedMarks = subject1 + subject2 + subject3;
        // var percentage = (obtainedMarks / totalMarks) * 100;
        
        // var grade, remarks;
        
        // if (percentage >= 80){
        //     grade = "A-one";
        //     remarks = "Excellent";
        // } else if (percentage >= 70) {
        //     grade = "A";
        //     remarks = "Good";
        // } else if (percentage >= 60) {
        //     grade = "B";
        //     remarks = "You need to improve";
        // } else if (percentage < 60) {
        //     grade = "Fail";
        //     remarks = "Sorry";
        // }
        
        // document.write("<h1>Marks Sheet</h1>");
        // document.write("<h2><br/>Total Marks: " + totalMarks);
        // document.write("<br/>Marks Obtained: " + obtainedMarks);
        // document.write("<br/>Percentage: " + percentage.toFixed(2) + "%");
        // document.write("<br/>Grade: " + grade);
        // document.write("<br/>Remarks: " + remarks);


    // ======================== Q 10 ================================
    // Q10. Write a program to implement checkout process of a
    // shopping cart system for an e-commerce website. Take input
    // from users, the following: 
    
        // ==================== A N S W E R ===================

        var pdt1 = "Watch";
        var pdt2 = "smart watch";
        var pdt1price = 2000;
        var pdt2price = 3000;
        var qty1 = 2;
        var qty2 = 3;
        var Shippingcgarges= 250;
        var total = (pdt1price*qty1) + ( pdt2price* qty2) + Shippingcgarges 
        var Discounted= (total * 10) / 100 
        var finalprice = total-Discounted
        document.write(`<h1> Shopping Cart </h1> <br>  `)
        document.write(`<h3>Price of ${pdt1} is ${pdt1price} <br>`)
        document.write(`Quantity of ${pdt1} is ${qty1} <br>`)
        document.write(`Price of ${pdt2} is ${pdt2price} <br>`)
        document.write(`Quantity of ${pdt2} is ${qty2} <br><br>`)
        document.write(`Shipping Charges ${Shippingcgarges} <br> <br>`)
        document.write(`Total Cost of Your Order is  ${total} PKR <br> after 10%
                          Discounted The  Price is ${finalprice} PKR `)

    // ======================== Q 11 ================================
        // Guess game:
        // Store a secret number (ranging from 1 to 10) in a variable.
        // Prompt user to guess the secret number.
        // a. If user guesses the same number, show “Bingo! Correct
        // answer”.
        // b. If the guessed number +1 is the secret number, show
        // “Close enough to the correct answer”
        
        // ==================== A N S W E R ===================

        var secretNumber = 7
        var userinput =+prompt( "Guess the secret number (between 1 and 10):")
        if(userinput===secretNumber){
            alert( "Bingo! Correct answer ")
        }
        else{
            alert("Close enough to the correct answer")
        }
    
    // ======================== Q 12 ================================

