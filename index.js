var button = document.getElementById("button"); //gets the button #id from html

function onClick(){
  // Generates a random number from 1 - 6 for the first dice
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //create the path for the dice1 img

  var dice1 = document.querySelector(".dice img").setAttribute("src", randomImageSource1); //change dice1 img

  // Generates a random number from 1 - 6 for the second dice
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  //create the path for the dice2 img

  var dice1 = document.querySelector(".dice .img2").setAttribute("src", randomImageSource2);//change dice2 img

  //Changes message according to dice roll result
  if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerText = "👏🏻 Draw! 👏🏻";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerText = "🎉 Player 2 Wins! 🎉";
  }
  else{
    document.querySelector(".container h1").innerText = "🎉 Player 1 Wins! 🎉";
  }
}

button.addEventListener("click", onClick);
