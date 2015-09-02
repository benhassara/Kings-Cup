// Shuffle Deck into new array "shufDeck"

var shufDeck = shuffle(deck);

// Styling function using DOM manipulation

function addCard(cardChar, msg) {
// add a card & round message to the page

  var $container = $('<div class="round">');
  var $newCard = $('<div class="card">');
  var $message = $('<div class="rnd-text">');

  $newCard.html(cardChar);
  $container.append(newCard);
  $container.append(message);

  $('#someID').prepend($container);

}

// Pull first card in array and call styling function "addCard"

function drawCard() {
    //if shufDeck empty, func will return undefined
    if (shufDeck[0] !== undefined) {
      var picked = shufDeck[0].unicode;
      var cardObj = shufDeck.shift();

      addCard(picked);

      return cardObj;
    }
}

function showCard(num){

    for (var i = 0; i < num; i++) {
      var current = drawCard();
      if (current !== undefined) {
        var msg = (playRound(current.rank));
        addMessage(msg);
      }
      else {
        alert(playRound(current));
        if (!findButton()) {
          addButton();
        }
      }
    }
}

function addButton() {
  var btnReset = document.createElement('button');
  var after = document.getElementById('someId');
  document.body.insertBefore(btnReset, after);
  btnReset.innerText = "Reset";
  btnReset.addEventListener('click', resetGame);
}

//Function checking card's rank with switch statement for output

function playRound(rank) {

  if (rank >= 1 && rank <= 13)
    return msgs[rank.toString()];

  return 'Game Over';

}

function shuffle(deck) {
  //take in deck array, return a shuffled version
  var wrk = deck.slice(0);
  var shuffled = [];
  while (wrk.length > 0) {
    if (wrk.length === 1) {
      shuffled.push(wrk[0]);
      break;
    }
    else {
      var i = Math.floor(Math.random() * wrk.length);
      shuffled.push(wrk.splice(i, 1)[0]);
    }
  }
  return shuffled;
}

function resetGame() {
  //reset screen without reloading
  shufDeck = shuffle(deck);
  document.getElementById('someId').innerHTML = "";
}

function findButton() {
  var btns = document.getElementsByTagName('button');
  var exist = false;
  if (btns.length >= 1)
    return true;
  else
    return false;

}

var x = prompt('How many cards dealt each turn?');

