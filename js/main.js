//console.log("Up and running!");
//var cardOne = "queen";
//var caadTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1])
   alert("You found a match!");
  else {
   alert("Sorry, try again!");
  }

 }
var flipcard = function(cardId){


//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped" + " "+ cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped" + " "+ cardTwo);
console.log("User flipped" + " " +cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
flipcard(0);
flipcard(2);
checkForMatch();

//if (cardsInPlay.length === 2) {
 // if (cardsInPlay[0] === cardsInPlay[1]){
  //  alert("You found a match!");
  //} else {
  //  alert("Sorry, try again!");
  //}
//}


