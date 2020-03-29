const normilize_num = 64;
const alphabet_len = 26;
const z_code = 59;
const charCode = (letter) => letter.charCodeAt(0) - normilize_num;
const caesarCipher = (string, n) => {
    n = n > 0 ? n % alphabet_len : (n % alphabet_len) * -1;
    return Array.from(string).map(el => charCode(el) > 0 && charCode(el) < z_code
        ? charCode(el) < alphabet_len + 1
            ? charCode(el) + n < alphabet_len + 1
                ? String.fromCharCode(charCode(el) + n + normilize_num)
                : String.fromCharCode(charCode(el) + n - alphabet_len + normilize_num)
            : charCode(el) + n < z_code
                ? String.fromCharCode(charCode(el) + n + normilize_num)
                : String.fromCharCode(charCode(el) + n - alphabet_len + normilize_num)
        : el).join("");
};
