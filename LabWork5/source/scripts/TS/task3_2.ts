export {};
const normilize_num: number = 64;
const alphabet_len: number = 26;
const z_code: number = 59;
const charCode = (letter): number => letter.charCodeAt(0)-normilize_num;
const caesarCipher = (string: string, n: number):string =>{
    n =  n > 0 ? n%alphabet_len : (n % alphabet_len) * -1;
    return Array.from(string).map(
    el => charCode(el) > 0  && charCode(el) < z_code
    ? charCode(el) < alphabet_len + 1
    ? charCode(el) + n < alphabet_len + 1
    ? String.fromCharCode(charCode(el) + n + normilize_num)
    : String.fromCharCode(charCode(el) + n - alphabet_len + normilize_num)
    : charCode(el) + n < z_code
    ? String.fromCharCode(charCode(el) + n + normilize_num)
    : String.fromCharCode(charCode(el) + n - alphabet_len  + normilize_num)
    : el
).join("")}
