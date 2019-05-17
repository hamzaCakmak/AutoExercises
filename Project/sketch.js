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

 var imgList = [["img/example1/PNG0.png", "img/example1/PNG1.png", "img/example1/PNG2.png", "img/example1/PNG3.png","img/example1/PNG4.png",
					"img/example1/PNG5.png","img/example1/PNG6.png","img/example1/PNG7.png"], 
                  ["img/example2/PNG20.png", "img/example2/PNG21.png", "img/example2/PNG22.png", "img/example2/PNG23.png","img/example2/PNG24.png"]];
				  
				  
var i = 0; var j = 0;
function nextImg(s) {
  if (s == 1) {
	if (++i < imgList[s - 1].length){
			var pngURL = "";
			pngURL = imgList[s-1][i];
			document.getElementById("imgEx1").src = pngURL;
		}
	}
  else {
	if (++j < imgList[s - 1].length){
			var pngURL = "";
			pngURL = imgList[s-1][j];
			document.getElementById("imgEx2").src = pngURL;
		}
	}
  }
function reset() {
  i = 0;
  j = 0;
  document.getElementById("imgEx1").src = "img/example1/PNG0.png";
  document.getElementById("imgEx2").src = "img/example2/PNG20.png";
}