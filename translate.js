const keyboardMap = {
    q: "й", w: "ц", e: "у", r: "к", t: "е", y: "н", u: "г", i: "ш", o: "щ", p: "з", "[": "х", "]": "ъ",
    a: "ф", s: "ы", d: "в", f: "а", g: "п", h: "р", j: "о", k: "л", l: "д", ";": "ж", "'": "э",
    z: "я", x: "ч", c: "с", v: "м", b: "и", n: "т", m: "ь", ",": "б", ".": "ю", "/": ".",
    Q: "Й", W: "Ц", E: "У", R: "К", T: "Е", Y: "Н", U: "Г", I: "Ш", O: "Щ", P: "З", "{": "Х", "}": "Ъ",
    A: "Ф", S: "Ы", D: "В", F: "А", G: "П", H: "Р", J: "О", K: "Л", L: "Д", ":": "Ж", "\"": "Э",
    Z: "Я", X: "Ч", C: "С", V: "М", B: "И", N: "Т", M: "Ь", "<": "Б", ">": "Ю", "?": ","
};

const translateText = (text) => {
    if (text.length === 0) return text;
    let first = '';
    let second = '';
    let start = 0;
    let end = text.length - 1;
    while (start <= end) {
        if (start !== end) {
            first += keyboardMap[text[start]] || text[start];
            let char = keyboardMap[text[end]] || text[end];
            second = char + second;
        } else {
            first += keyboardMap[text[start]] || text[start];
        }
        start++;
        end--;
    }

    return first + second;
}