// Enhance each function and put comments 
// above each line of code explaining what is happening in your own words.

function displayWelcome() { //this function displays the welcome statement.
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
}

function displayInstructions() { //this function displays the instructions
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}

function play() { // this function runs the rolling of the die
    var die1 = Math.ceil(Math.random() * 6);
     // These two variables randomize the die
     //  this caused the second dice to roll above a 6 var die2 = Math.ceil(Math.random() * 12);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    // Error where 8 would cause a loss
    if (sum == 7 || sum == 11) {
        document.write("You lose Space Cadet!")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win Space Ranger!")
        document.write("<br/>")
    }
    else {
        document.write("Roll again Space Cadet!")
        document.write("<br/>")
    }
}
