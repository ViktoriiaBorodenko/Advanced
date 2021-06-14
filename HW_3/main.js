/*3*/
const getUpperLetter = (nameHuman) => nameHuman[0].toUpperCase() + nameHuman.slice(1).toLocaleLowerCase();

/*6*/
function countLetter(latterRepeat, worldInput) {
    return worldInput.split(new RegExp(latterRepeat, "gi")).length - 1;
}

/*8*/
function getRandomPassword(lenPassword = 8) {
    if (lenPassword > 10) lenPassword = 8;
    lenPassword = lenPassword * (-1);
    return Math.random().toString().slice(lenPassword);
}

/*9*/
let deleteLetters = (deleteLatter, str) => str.replace(new RegExp(deleteLatter, "gi"), '');

/*10*/
function isPalyndrom(phraseInput) {
    let replaceSymbol = [" ", "!", "?", ",", ".", ":"];
    let filteredPhrase = '';
    for (let i = 0; i < phraseInput.length; i++) {
        if (!replaceSymbol.includes(phraseInput[i])) {
            filteredPhrase += phraseInput[i];
        }
    }
    filteredPhrase = filteredPhrase.toLocaleLowerCase();
    return filteredPhrase === filteredPhrase.split("").reverse().join("");
}

/*11*/
function deleteDuplicateLetter(sentenceInput) {
    sentenceInput = sentenceInput.toLocaleLowerCase().replace(/ /g, "").split("");
    const arrayDeleteDuplicateLetter = sentenceInput.filter((function (event) {
        return sentenceInput.indexOf(event) == sentenceInput.lastIndexOf(event);
    }));
    return arrayDeleteDuplicateLetter.join("");
}

console.log(`
Функція №3: ${getUpperLetter("оМЕЛЬКО")} <br>
Функція №6: ${countLetter("а", "відчайдушний")} <br>
Функція №8: ${getRandomPassword(8)} <br>
Функція №9: ${deleteLetters('а', "абабагаламага")} <br>
Функція №10: ${isPalyndrom("І мчу кіло бараболі Кучмі")} <br>
Функція №11: ${deleteDuplicateLetter("Отут буде кінець мого домашнього завдання")}`)

