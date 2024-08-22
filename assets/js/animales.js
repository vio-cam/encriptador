// Mapa de codificación
const encodingMap = {
    'a': '🕷️', 'b': '🦉', 'c': '🐎', 'd': '🐬', 'e': '🐘', 'f': '🍓',
    'g': '🐱', 'h': '🦛', 'i': '🦎', 'j': '🦒', 'k': '🐨', 'l': '🦁', 'm': '🐒',
    'n': '🦦', 'o': '🐻', 'p': '🐼', 'q': '🦜', 'r': '🐭', 's': '🐸', 't': '🐃',
    'u': '🦄', 'v': '🐄', 'w': '🦘', 'x': '🐟', 'y': '🐊', 'z': '🦊'
};

// Mapa de decodificación
const decodingMap = {
    '🕷️': 'a', '🦉': 'b', '🐎': 'c', '🐬': 'd', '🐘': 'e', '🍓': 'f',
    '🐱': 'g', '🦛': 'h', '🦎': 'i', '🦒': 'j', '🐨': 'k', '🦁': 'l', '🐒': 'm',
    '🦦': 'n', '🐻': 'o', '🐼': 'p', '🦜': 'q', '🐭': 'r', '🐸': 's', '🐃': 't',
    '🦄': 'u', '🐄': 'v', '🦘': 'w', '🐟': 'x', '🐊': 'y', '🦊': 'z'
};

// Función para encriptar
function encryptMessage(message) {
    return message.split('').map(char => encodingMap[char] || char).join('');
}

// Función para desencriptar
function decryptMessage(message) {
    let decrypted = '';
    let currentSymbol = '';

    for (const char of message) {
        currentSymbol += char;

        if (decodingMap[currentSymbol]) {
            decrypted += decodingMap[currentSymbol];
            currentSymbol = '';
        } else if (Object.values(decodingMap).includes(currentSymbol)) {
            // Continue collecting the symbol if it's not complete
            continue;
        } else {
            // If the symbol is not found, reset and add the character directly
            decrypted += currentSymbol;
            currentSymbol = '';
        }
    }

    // If there's any remaining symbol that was not decoded
    decrypted += decodingMap[currentSymbol] || currentSymbol;

    return decrypted;
}

// Selección de elementos
const messageInput = document.getElementById('message');
const resultOutput = document.getElementById('result');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');

// Eventos
encryptButton.addEventListener('click', () => {
    const encrypted = encryptMessage(messageInput.value);
    resultOutput.value = encrypted;
});

decryptButton.addEventListener('click', () => {
    const decrypted = decryptMessage(messageInput.value);
    resultOutput.value = decrypted;
});
