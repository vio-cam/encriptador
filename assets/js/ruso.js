const cifrado = {
  encode(offset, msg) {
    if (msg === "") { throw new TypeError(); }
    let msgEncode = "";
    for (let i = 0; i < msg.length; i++) {
      const letter = msg.charAt(i);
      msgEncode += getSymbol(letter);
    }
    return msgEncode;
  },
  decode(offset, msg) {
    if (msg === "") { throw new TypeError(); }
    let msgDecode = "";
    let i = 0;

    while (i < msg.length) {
      let found = false;

      // Buscar coincidencia para cada símbolo en el texto cifrado
      for (let symbolLength = 1; symbolLength <= 4; symbolLength++) { // Ajusta el rango si es necesario
        const symbol = msg.substr(i, symbolLength);
        if (getLetter(symbol)) {
          msgDecode += getLetter(symbol);
          i += symbolLength;
          found = true;
          break;
        }
      }

      if (!found) {
        // Si no encuentra un símbolo, devuelve el carácter tal cual
        msgDecode += msg.charAt(i);
        i++;
      }
    }

    return msgDecode;
  }
};

// Mapeo de letras a símbolos
function getSymbol(letter) {
  const symbols = {
    'A': 'к', 'B': 'б', 'C': '+', 'D': '/', 'E': 'v',
    'F': 'Ф', 'G': 'г', 'H': 'ч', 'I': 'и', 'J': 'д',
    'K': '*', 'L': 'л', 'M': '3', 'N': 'н', 'O': '0',
    'P': 'п', 'Q': '<', 'R': '1', 'S': '6', 'T': 'т',
    'U': '-', 'V': 'в', 'W': 'ш', 'X': '5', 'Y': 'й',
    'Z': 'я'
  };

  letter = letter.toUpperCase();

  return symbols[letter] || letter;
}

// Mapeo de símbolos a letras
function getLetter(symbol) {
  const letters = {
    'к': 'A', 'б': 'B', '+': 'C', '/': 'D', 'v': 'E',
    'Ф': 'F', 'г': 'G', 'ч': 'H', 'и': 'I', 'д': 'J', '*': 'K',
    'л': 'L', '3': 'M', 'н': 'N', '0': 'O',
    'п': 'P', '<': 'Q', '1': 'R', '6': 'S', 'т': 'T',
    '-': 'U', 'в': 'V', 'ш': 'W', '5': 'X', 'й': 'Y',
    'я': 'Z'
  };

  return letters[symbol] || symbol;
}

export default cifrado;