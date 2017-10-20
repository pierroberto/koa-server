module.exports = function pickLetter () {
  const letters = ['a','b','c','d', 2];
  const rndNum = Math.floor(Math.random() * letters.length);
  return new Promise ((resolved, rejected) => {
    if (typeof letters[rndNum] == 'number') {
      rejected('format not valid');
    } else {
      resolved(letters[rndNum]);
    }
  });
}
