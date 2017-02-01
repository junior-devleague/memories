var turned = [];
var pic=[1,1,2,2,3,3,4,4];
var ids = ["one","two","three","four","five","six","seven","eight"];
var pair = [];
var points = 0;
for (var i = 0; i < 8; i++) {
	var randomNumber =  Math.floor(Math.random() * (pic.length));
	console.log(pic[randomNumber]);
	var back=document.getElementsByClassName("back")[i];
	back.style.backgroundImage = "url('./assets/"+pic[randomNumber]+".png')";
	pair.push([ids[i],pic[randomNumber]]);
	pic.splice(randomNumber, 1);
}
var count = 30;
var timeStarted = false;
function clock(){
	if(count==0){
		clearInterval(clock);
	}
	else{
		count-=1;
		if(count<10){
			document.getElementById("time").innerHTML="Time: 0:0"+count;
		}
		else{
			document.getElementById("time").innerHTML="Time: 0:"+count;
		}
	}
}
function start(){
	started=true;
	document.getElementById("start").parentNode.removeChild(document.getElementById("start"));
	document.getElementById("container").style.filter="blur(0px)";

}
function finish(){
	document.getElementById("finish").style.display="none";
	started==true;
}
function press(idName) {
	if(started==true){
		if (timeStarted==false){
				timeStarted=true;
				var time =setInterval(clock, 1000);
		}
		var box = document.getElementById(idName);
		box.style.transform = 'rotateY(180deg)';
		if((turned[0]==idName||turned[1]==idName)==false)
		{
			turned.push(idName);
		}
		if(turned.length == 2){
			setTimeout(function(){
				var first =document.getElementById(turned[0]);
				var second =document.getElementById(turned[1]);
				var x =ids.indexOf(turned[0]);
				var y =ids.indexOf(turned[1]);
				first.style.transform = 'rotateY(0deg)';
				second.style.transform = 'rotateY(0deg)';
				if(pair[x][1]==pair[y][1])
				{
					first.style.display="none";
					second.style.display="none";
					points += 1;
					document.getElementById("points").innerHTML="Correct: "+points;
					if(points==4){
						document.getElementById("finish").style.display='inline';
///////////////////////////////////////
					}
				}
				turned = [];
			}, 400);
		}
	}
}