/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo
 * @returns {String} retorna una carta del deck
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  return deck.pop();
};


