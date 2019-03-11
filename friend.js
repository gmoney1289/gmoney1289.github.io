function myFunction() {
    var name = prompt("What is your name?");
alert("Hello, " + name);

    var acceptableAnswers = [
        "Greg",
        "Piper",
        "Russ"
    ];
    
var friend = prompt("Who is your best friend?");

    while (acceptableAnswers.indexOf(friend) < 0) {
    alert("Try Again");
    var friend = prompt("Who is your best friend?");
  } alert("Good job, " + name);
}
