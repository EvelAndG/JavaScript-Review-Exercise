var cities = [];
var userInput;

alert("please enter 5 cities you think will go underwater first:");

for (var ix = 1; ix < 6; ix++){
	userInput = prompt("City # " + ix);
	cities.push(userInput);
}

/* Updated repetitive code using loop above
var answer1 = prompt("City 1: ");
var answer2 = prompt("City 2: ");
var answer3 = prompt("City 3: ");
var answer4 = prompt("City 4: ");
var answer5 = prompt("City 5: ");
cities.push(answer1);
cities.push(answer2);
cities.push(answer3);
cities.push(answer4);
cities.push(answer5);
console.log(cities);
*/

document.write("<table border='1px black'>");
document.write("<th>" + " Order" + "</th>");
document.write("<th>" + "Doomed Cities" + "</th>");
for (var i = 0; i < cities.length; i++) {
	document.write("<tr>");
	document.write("<td>"+ (i+1) + "</td>");
	document.write("<td>"+ cities[i] + "</td>");
	document.write("</tr>");
}
document.write("</table>");

