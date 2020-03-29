export {};
const charCode = (letter): number => letter.charCodeAt(0)-64;
const caesarCipher = (string: string, n: number):string =>{
    n =  n > 0 ? n%26 : (n % 26) * -1;
    return Array.from(string).map(
    el => charCode(el) > 0  && charCode(el) < 59
    ? charCode(el) < 27
    ? charCode(el) + n < 27
    ? String.fromCharCode(charCode(el) + n + 64)
    : String.fromCharCode(charCode(el) + n - 26 + 64)
    : charCode(el) + n < 59
    ? String.fromCharCode(charCode(el) + n + 64)
    : String.fromCharCode(charCode(el) + n - 26  + 64)
    : el
).join("")}
[...(Array(100).keys())].map(el => el - 50).map(el => console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", el)))