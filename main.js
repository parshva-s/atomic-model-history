"use script";

//when submit button clicked, program runs check function
document.getElementById('submit').addEventListener('click',check);

//pre: submit button is pressed
//function: checks to see if the answer of the user is right or wrong
//post: prints if answer is correct after each question and the end score
function check () {

    //declaring and initializing all variables
    var c = 0;
    var q1 = document.getElementById('correct1').checked;
    var response1 = document.getElementById('response1');
    var q2 = document.getElementById('correct2').checked;
    var response2 = document.getElementById('response2');
    var q3 = document.getElementById('correct3').checked;
    var response3 = document.getElementById('response3');
    var q4 = document.getElementById('correct4').checked;
    var response4 = document.getElementById('response4');
    var q5 = document.getElementById('correct5').checked;
    var response5 = document.getElementById('response5');
    var q6 = document.getElementById('correct6').checked;
    var response6 = document.getElementById('response6');
    
    //check question 1
    if (q1) { //if correct
        c++; //add to total score
        response1.innerHTML = "Answer to Question 1 is correct!";
        response1.style.color = "green";
    } else { //if incorrect
        response1.innerHTML = "Answer to Question 1 is wrong."
        response1.style.color = "red";
    }

    //check question 2
    if (q2) { //if correct
        c++; //add to total score
        response2.innerHTML = "Answer to Question 2 is correct!";
        response2.style.color = "green";
    } else { //if incorrect
        response2.innerHTML = "Answer to Question 2 is wrong."
        response2.style.color = "red";
    }

    //check question 3
    if (q3) { //if correct
        c++; //add to total score
        response3.innerHTML = "Answer to Question 3 is correct!";
        response3.style.color = "green";
    } else { //if incorrect
        response3.innerHTML = "Answer to Question 1 is wrong."
        response3.style.color = "red";
    }

    //check question 4
    if (q4) { //if correct
        c++; //add to total score
        response4.innerHTML = "Answer to Question 4 is correct!";
        response4.style.color = "green";
    } else { //if incorrect
        response4.innerHTML = "Answer to Question 1 is wrong."
        response4.style.color = "red";
    }

    //check question 5
    if (q5) { //if correct
        c++; //add to total score
        response5.innerHTML = "Answer to Question 5 is correct!";
        response5.style.color = "green";
    } else { //if incorrect
        response5.innerHTML = "Answer to Question 1 is wrong."
        response5.style.color = "red";
    }

    //check question 6
    if (q6) { //if correct
        c++; //add to total score
        response6.innerHTML = "Answer to Question 6 is correct!";
        response6.style.color = "green";
    } else { //if incorrect
        response6.innerHTML = "Answer to Question 1 is wrong."
        response6.style.color = "red";
    }

    //prints result of quiz
    document.getElementById('results').innerHTML = "Your result for this quiz: " + c + "/6."
    document.getElementById('goHome').style.visibility = "visible";

    //scrolls to top after everything has been marked
    window.scrollTo(0,0);
}
