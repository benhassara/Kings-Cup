// Create array "deck" containing each card object
var deck = [
  {rank: 1, unicode: "🂡"}, {rank: 1, unicode: "🂱"},
  {rank: 1, unicode: "🃁"}, {rank: 1, unicode: "🃑"},
  {rank: 2, unicode: "🂢"}, {rank: 2, unicode: "🂲"},
  {rank: 2, unicode: "🃂"}, {rank: 2, unicode: "🃒"},
  {rank: 3, unicode: "🂣"}, {rank: 3, unicode: "🂳"},
  {rank: 3, unicode: "🃃"}, {rank: 3, unicode: "🃓"},
  {rank: 4, unicode: "🂤"}, {rank: 4, unicode: "🂴"},
  {rank: 4, unicode: "🃄"}, {rank: 4, unicode: "🃔"},
  {rank: 5, unicode: "🂥"}, {rank: 5, unicode: "🂵"},
  {rank: 5, unicode: "🃅"}, {rank: 5, unicode: "🃕"},
  {rank: 6, unicode: "🂦"}, {rank: 6, unicode: "🂶"},
  {rank: 6, unicode: "🃆"}, {rank: 6, unicode: "🃖"},
  {rank: 7, unicode: "🂧"}, {rank: 7, unicode: "🂷"},
  {rank: 7, unicode: "🃇"}, {rank: 7, unicode: "🃗"},
  {rank: 8, unicode: "🂨"}, {rank: 8, unicode: "🂸"},
  {rank: 8, unicode: "🃈"}, {rank: 8, unicode: "🃘"},
  {rank: 9, unicode: "🂩"}, {rank: 9, unicode: "🂹"},
  {rank: 9, unicode: "🃉"}, {rank: 9, unicode: "🃙"},
  {rank: 10, unicode: "🂪"}, {rank: 10, unicode: "🂺"},
  {rank: 10, unicode: "🃊"}, {rank: 10, unicode: "🃚"},
  {rank: 11, unicode: "🂫"}, {rank: 11, unicode: "🂻"},
  {rank: 11, unicode: "🃋"}, {rank: 11, unicode: "🃛"},
  {rank: 12, unicode: "🂭"}, {rank: 12, unicode: "🂽"},
  {rank: 12, unicode: "🃍"}, {rank: 12, unicode: "🃝"},
  {rank: 13, unicode: "🂮"}, {rank: 13, unicode: "🂾"},
  {rank: 13, unicode: "🃎"}, {rank: 13, unicode: "🃞"}
  ];

// Shuffle Deck into new array "shufDeck"

var shufDeck = shuffle(deck);

// Styling function using DOM manipulation

function addCard(cardChar) {

  var newCard = document.createElement("div");
  var newContent = document.createTextNode(cardChar);
  var parent = document.getElementById("someId");


  newCard.setAttribute("class", "card");
  newCard.appendChild(newContent);
  parent.insertBefore(newCard, parent.firstChild);

}

// Pull first card in array and call styling function "addCard"

function cardDiscard() {
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
      var current = cardDiscard();
      if (current !== undefined) {
        var msg = (playRound(current.rank));
        var newText = document.createElement('span');
        var parent = document.getElementById('someId');
        newText.innerText = msg;
        newText.className = 'rnd-text';
        parent.insertBefore(newText, parent.firstChild.nextSibling);
      }
      else {
        alert(playRound(current));
        // window.location.reload();
        if (!findButton()) {
          var btnReset = document.createElement('button');
          var after = document.getElementById('someId');
          document.body.insertBefore(btnReset, after);
          btnReset.innerText = "Reset";
          btnReset.addEventListener('click', resetGame);
        }
      }
    }
}

//Function checking card's rank with switch statement for output

function playRound(rank) {

  var result = "";

  switch(rank) {

    case 1:
      result = "Waterfall";
      break;

    case 2:
      result = "Pick two people, and make them drink.";
      break;

    case 3:
      result = "Three is me, take 3 drinks.";
      break;

    case 4:
      result = "Take 2 drinks, give out 2.";
      break;

    case 5:
      result = "Set a rule to follow.";
      break;

    case 6:
      result = "Thumb rule - Place a thumb on the table, last person to do so drinks.";
      break;

    case 7:
      result = "Hand to heaven, last person to do so drinks.";
      break;

    case 8:
      result = "Choose a mate, every time they drink, you drink.";
      break;

    case 9:
      result = "Rhyme time - Pick a word, everyone rhymes against it, if you get stumped you drink.";
      break;

    case 10:
      result = "Categories, pick a category, if you get stumped..you drink.";
      break;

    case 11:
      result = "Dudes drink...";
      break;

    case 12:
      result = "Ladies drink...";
      break;

    case 13:
      result = "King, if it isn't the last king, add to kings cup. If last King, drink kings cup.";
      break;
    default:
      result = "game over";
      break;

  }

  return result;

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
