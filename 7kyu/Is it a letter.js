// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
  const result = character.charCodeAt(0)
  return (result > 64 && result < 91) || (result > 96 && result < 123)
}