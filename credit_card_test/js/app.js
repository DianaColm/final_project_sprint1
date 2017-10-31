var numCard = prompt("Escribe los digitos de tu tarjeta");
function isValidCard(numCard){
  var size = numCard.length;
  var lastPosition = size-1;
  var cardArray = [];
  for (var i=lastPosition; i >= 0 ; i--){
    cardArray.push(numCard[i]);
  }
  return cardArray;
}
console.log(reverse(numCard));




/**  if (numCard.length !==16){
    alert("Error: Verifica que sean los 16 digitos de tu tarjeta sin espacios ni letras");
  }*/
