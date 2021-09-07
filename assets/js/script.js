const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumb = document.getElementById('charAmountNumb')
const includeUpperCaseEl = document.getElementById('includeUpperCase')
const includeLowerCaseEl = document.getElementById('includeLowerCase')
const includeNumbersEl = document.getElementById('includeNumbers')
const includeSymbolsEl = document.getElementById('includeSymbols')



const form = document.getElementById('passwordGeneratorForm')


charAmountRange.addEventListener('input', syncAmount)
charAmountNumb.addEventListener('input', syncAmount)

form.addEventListener('generate', e => {
  e.preventDefault()
  const charAmount = charAmountNumb.value
  const includeUpperCase = includeUpperCaseEl.checked
  const includeLowerCase = includeLowerCaseEl.checked
  const includeNumbers = includeNumbersEl.checked
  const includeSymbols = includeSymbolsEl.checked
  const password = generatePassword(charAmount, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols)
})


function syncAmount(e) {
  const value = e.target.value
  charAmountNumb.value = value
  charAmountRange.value = value
}