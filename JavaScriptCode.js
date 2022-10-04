// Enhance each funtion and put comments

function displayWelcome(){
    //This is the welcome message
    document.write("<h2> Welcome to twin comet casino!</h2>");
}

function displayInstructions(){
    //This instructs the user on how to play
    document.write("<br/><p>Roll die to win!")

}

function play(){
    //this uses a random number generator to get a number from 1-6
    var die1 = Math.ceil(Math.random() * 6);

    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("</br>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11){
        document.write("you lose!")
        document.write("</br>")

    }
}
