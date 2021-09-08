const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumb = document.getElementById('charAmountNumb')
const includeUpperCaseEl = document.getElementById('includeUpperCase')
const includeNumbersEl = document.getElementById('includeNumbers')
const includeSymbolsEl = document.getElementById('includeSymbols')

const passwordDisplay = document.getElementById('passwordDisplay')
const generateBtn = document.getElementById('generate')

const upperCaseCharCodes = arrayLowToHigh(65, 90)
const lowerCaseCharCodes = arrayLowToHigh(97, 122)
const numberCharCodes = arrayLowToHigh(48, 57)
const symbolCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126))


charAmountRange.addEventListener('input', syncAmount)
charAmountNumb.addEventListener('input', syncAmount)

generateBtn.addEventListener('click', () => {
 
  const charAmount = charAmountNumb.value
  const includeUpperCase = includeUpperCaseEl.checked
  const includeNumbers = includeNumbersEl.checked
  const includeSymbols = includeSymbolsEl.checked
  const password = generatePassword(charAmount, includeUpperCase, includeNumbers, includeSymbols)
  passwordDisplay.innerHTML = password
  
})

function generatePassword(charAmount, includeUpperCase, includeNumbers, includeSymbols) {
  let charCodes = lowerCaseCharCodes
  if (includeUpperCase) charCodes = charCodes.concat(upperCaseCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)

  const passwordChar = []
  for (let i = 0; i < charAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordChar.push(String.fromCharCode(characterCode))
  }
  return passwordChar.join('')
}

function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncAmount(e) {
  const value = e.target.value
  charAmountNumb.value = value
  charAmountRange.value = value
}