var numCard = prompt("Escribe los digitos de tu tarjeta");

if (typeof numCard.length === " "){
    alert("Error: Verifica que sean los 16 digitos de tu tarjeta sin espacios ni letras");
  }

/*function isValidCard(numCard){
  var size = numCard.length;
  var lastPosition = size-1;
  var cardArray = [];
  for (var i=lastPosition; i >= 0 ; i--){
    cardArray.push(numCard[i]);
  }
  return cardArray;
}
console.log(reverse(numCard));
*/
