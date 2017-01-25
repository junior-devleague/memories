function press(idName) {
  console.log("hi");
  var box = document.getElementById(idName);
  box.style.transform = 'rotateY(180deg)';
  box.style.backgroundImage = "url('../assets/back.jpg')";
  box.style.backgroundSize= "cover";
}
function k(){
  console.log("ate");
}