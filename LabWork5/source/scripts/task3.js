const charCode = (letter) => letter.charCodeAt(0)-64;

const caesarCipher = (string, n) => Array.from(string).map(
    el => charCode(el) > 0  && charCode(el) < 59
    ? charCode(el) < 27
    ? charCode(el) + n < 27
    ? String.fromCharCode(charCode(el) + n + 64)
    : String.fromCharCode(charCode(el) + n - 26 + 64)
    : charCode(el) + n < 59
    ? String.fromCharCode(charCode(el) + n + 64)
    : String.fromCharCode(charCode(el) + n - 26  + 64)
    : el
).join("")

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5))