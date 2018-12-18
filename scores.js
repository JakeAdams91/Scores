var $ = function (id) { return document.getElementById(id); };
console.log("Jake Adams -- Javascript")
var students = [];
var scores = [];

var displayScores = function () {
  let average = 0
  scores.forEach(score => {average += score / scores.length})
  $("average_score").value = average
  // students = students.splice(1, 0, "<br>")
  $("scores").value = students.join('')
};

var addScore = function () {
  // format names by uppercasing the first letter of the previously lowercased names.
  let firstName = $("first_name").value.toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase())
  let lastName = $("last_name").value.toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase())
  let score = $("score").value
  students.push(lastName + ", " + firstName + " : " +  score  + '\n')
  scores.push(score)

  console.log(students)
  displayScores()
  // get the add form ready for next entry
  $("first_name").value = "";
  $("last_name").value = "";
  $("score").value = "";
  $("first_name").focus();
};

var clearScores = function () {   
  students = []
  scores = []
  // remove the score data from the web page
  $("average_score").value = "";
  $("scores").value = "";
  $("first_name").focus();
};

var sortScores = function () {   
  students = students.sort()
  console.log("Sorted Alphabetically", students)
  $("scores").value = students.join('')
};

window.onload = function () {
  $("add_button").onclick = addScore;
  $("clear_button").onclick = clearScores;    
  $("sort_button").onclick = sortScores;    
  $("first_name").focus();
};