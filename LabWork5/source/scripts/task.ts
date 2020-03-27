const women_plus: number = 40
const male_less_t: number = 10
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
                 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
const vowels = {"a":1, "o":2, "i":3, "e":4, "u":5}

const isVowel = (letter: string): boolean => letter in vowels;
const allVowel = (word: string): string => Array.from(word).map( el => isVowel(el) ? el : ``).join("");
const allCons = (word: string): string => Array.from(word).map( el => isVowel(el) ? ``: el).join("");

const f_name = (name) => name.length == 2 ? name + "X"
: name.length == 1 ? name + "XX"
: name.length == 3 ? name
: allCons(name).length > 2 ? allCons(name).slice(0,3)
: allCons(name).length > 1 ? allVowel(name).length > 0 ? allCons(name) +  allVowel(name).slice(0,1) : allCons(name) + "X"
: allCons(name).length > 0 ? allVowel(name).length > 1 ? allCons(name) +  allVowel(name).slice(0,2) : allCons(name) + "XX"
: ""
const f_date = (date: string):string[] => date.split('/')
const f_dob = (date: string
    , gender: string
    ):string => `${f_date(date)[2].toString().slice(2,4)
    }${
        months[eval(f_date(date)[1])]}${
            gender == "M" ?
            eval(f_date(date)[0] )< male_less_t ?
            "0" + f_date(date)[0] :
            f_date(date)[0] :
            women_plus + eval(f_date(date)[0])}`;

const fiscalCode = (p) => `${f_name(p.surname.toLowerCase())}${f_name(p.name.toLowerCase())}${f_dob(p.dob, p.gender)}`.toUpperCase();
