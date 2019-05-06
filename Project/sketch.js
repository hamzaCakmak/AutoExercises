var rule1 = {
	"S": ["","a#S#a","b#S#b"]
}
var rule2 = {
	  "S": ["#NP# #VP#"],
	  "NP": ["the #N#"],
	  "VP": ["#V#", "#V# by #NP#"],
	  "N": ["bear","lion", "rabbit", "wolf"],
	  "V": ["beaten","haunted","scared", "captured", "killed"]
}
var rule3 = {
	"name": ["Aragorn","Sam","Legolas","Mithrandir","Faramir","Frodo","Gimli"],
	"creature": ["dragon","warg","great spider","great eagle","werewolf","giant","troll","fellbeast"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous","frightened"],
	"story": ["#hero# traveled with his pet #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
	"origin": ["#[hero:#name#][heroPet:#creature#]story#"]
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

