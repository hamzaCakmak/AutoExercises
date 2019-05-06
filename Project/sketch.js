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

 var imgList = [["example1/PNG0.png", "example1/PNG1.png", "example1/PNG2.png", "example1/PNG3.png","example1/PNG4.png",
					"example1/PNG5.png","example1/PNG6.png","example1/PNG7.png"], 
                  ["example2/PNG0.png", "example2/PNG1.png", "example2/PNG2.png", "example2/PNG3.png","example2/PNG4.png"]];
				  
				  
var i = 0; var j = 0;
function nextImg(s) {
  if (s == 1) {
	if (++i < imgList[s - 1].length)
	  document.getElementById("example1").innerHTML = '<img id="endofpage" src="' + "img/" + imgList[s-1][i] + '">'
	}
  else {
	if (++j < imgList[s - 1].length)
	  document.getElementById("example2").innerHTML = '<img id="endofpage" src="' + "img/" + imgList[s-1][j] + '" height="632" width="420">'
	}
  }
function reset() {
  i = 0;
  j = 0;
  document.getElementById("example1").innerHTML = "";
  document.getElementById("example2").innerHTML = "";
}