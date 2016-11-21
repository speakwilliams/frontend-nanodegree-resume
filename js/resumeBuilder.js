//$("#main").append("Keith Williams");

var awesomeThoughts = "I am Keith Williams and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts= awesomeThoughts.replace("AWESOME!", "FUN!");
$("#main").append(funThoughts);

var name= "Keith A. Williams";
var role=  "Software Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
