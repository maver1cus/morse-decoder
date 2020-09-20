  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
  };

function decode(expr) {
  const CODE_SPACE = '**********'
  const words = expr.split(CODE_SPACE);

  return words.map(word => word
    .match(/.{1,10}/g)
    .map(symbol => symbol
      .replace(/00/g, "")
      .replace(/10/g, ".")
      .replace(/11/g, "-")
    )
    .map(symbol => MORSE_TABLE[symbol])
    .join('')
  )
    .join(' ')
}

module.exports = {
  decode
}