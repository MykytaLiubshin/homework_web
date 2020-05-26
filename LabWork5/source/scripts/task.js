const women_plus = 40;
const male_less_t = 10;
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
const vowels = { "a": 1, "o": 2, "i": 3, "e": 4, "u": 5 };
const allVowel = (word) => Array.from(word).map(el => el in vowels ? el : ``).join("");
const allCons = (word) => Array.from(word).map(el => el in vowels ? `` : el).join("");
const f_l_name = (name) => name.length == 2 ? name + "X"
    : name.length == 1 ? name + "XX"
        : name.length == 3 ? name
            : allCons(name).length > 2 ? allCons(name).slice(0, 3)
                : allCons(name).length > 1 ? allVowel(name).length > 0 ? allCons(name) + allVowel(name).slice(0, 1) : allCons(name) + "X"
                    : allCons(name).length > 0 ? allVowel(name).length > 1 ? allCons(name) + allVowel(name).slice(0, 2) : allCons(name) + "XX"
                        : "";
const f_f_name = (name) => name.length == 2 
? allCons(name) + allVowel(name) + "X"
: name.length == 1 
    ? name + "XX"
    : name.length == 3 
        ? name
        : allCons(name).length > 3
            ? [0, 2, 3].map(ind => allCons(name)[ind]).join("")
            :allCons(name).length > 2 
                ? allCons(name).slice(0, 3)
                : allCons(name).length > 1 
                    ? allVowel(name).length > 0 
                        ? allCons(name) + allVowel(name).slice(0, 1)
                        : allCons(name) + "X"
                    : allCons(name).length > 0 
                        ? allVowel(name).length > 1
                            ? allCons(name) + allVowel(name).slice(0, 2)
                            : allCons(name) + "XX"
                        : "";
const f_date = (date) => date.split('/');
const f_dob = (date, gender) => `${f_date(date)[2].toString().slice(2, 4)}${months[eval(f_date(date)[1])]}${gender == "M" ?
    eval(f_date(date)[0]) < male_less_t ?
        "0" + f_date(date)[0] :
        f_date(date)[0] :
    women_plus + eval(f_date(date)[0])}`;
const fiscalCode = (p) => `${f_l_name(p.surname.toLowerCase())}${f_f_name(p.name.toLowerCase())}${f_dob(p.dob, p.gender)}`.toUpperCase();

var inputs = []

const submForm = () => {
    var x = document.getElementById("get_name");
    x = Array.from(x.elements).map(el => el.value)
    x = x.slice(0,6)
    x.some(el => el === "") ?  {} : inputs.push(x.slice(0,7)) ;
    inputs.length == 0 ? {} :show_inputs(inputs);
}

const show_inputs = (inputs = inputs) => 
document.getElementById("show_inputs").innerHTML = `<ul><div class="container-flex">${inputs.map(el => ` <li class=""><p class="h2">${fiscalCode(
    {
        name: el[0],
        surname: el[1],
        gender: el[2],
        dob: el.slice(3,6).join("/")
    })}</p> <p class="h4">${el.slice(0,3).map(e => `${e}`).join(" ")
}${el.slice(3,6).map(e => `${e}`).join("/")
}</p></li><hr style={{width: '100%', color: 'black', height: '1px', backgroundColor:'grey'}
} />`).join("")}</div></ul>` 