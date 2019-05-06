var rule1 = {
	"S": ["","a#S#a","b#S#b"]
}
var rule2 = {
	  "S": ["#NP# #VP#"],
	  "NP": ["the #N#"],
	  "VP": ["#V#", "#V# #NP#"],
	  "N": ["bear","lion", "rabbit", "wolf"],
	  "V": ["beaten","haunted","scared", "escaped", "escaped"]
}
var rule3 = {
	"name": ["Aragorn","Sam","Legolas","Mithrandir","Faramir","Frodo","Gimli"],
	"creatures": ["dragon","warg","great spider","great eagle","werewolf","giant","troll","fellbeast"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous","frightened"],
	"story": ["#hero# traveled with his #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
	"origin": ["#[hero:#name#][heroPet:#creatures#]story#"]
}
var grammar;

function sample(rules,s,elemID){
	grammar = tracery.createGrammar(rules);
	var result = grammar.flatten(s);
	if(result ==""){
		result = "ε";
	}
	document.getElementById(elemID).textContent = "w = " + result;
	console.log(result);
}

