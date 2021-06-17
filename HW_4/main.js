const students = ["Іван", "Анатолій", "Мар'яна", "Олеся", "Віктор", "Ольга"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPair (students){
    const pairOfStudents = [];

    pairOfStudents.push([students[0], students[2]]);
    pairOfStudents.push([students[1], students[3]]);
    pairOfStudents.push([students[4], students[5]]);
    return pairOfStudents;
}
const pairs = getPair(students);
console.log(pairs);


function getThemesPair (pairs, themes){
    const themesPairs = [];
    for (let i = 0; i < themes.length; i++){
        themesPairs.push([pairs[i][0] + ' і ' + pairs[i][1], themes[i]]);
    }

    return themesPairs;
}
const pairsWithThemes = getThemesPair(pairs, themes)
console.log(pairsWithThemes);


function getMarksStudent(students, marks){
    const marksStudent = [];
    for(let i =0; i < marks.length; i++){
      marksStudent.push([students[i], marks[i]]);
    }
    return marksStudent;
}
const marksForStudents = getMarksStudent(students, marks);
console.log(marksForStudents);


function getMarksPairs (pairsWithThemes){
    const marksPairs = [];
    for (let i = 0; i < pairsWithThemes.length; i++){
        const mark = Math.floor(Math.random()*5)+1 ;
        marksPairs.push([pairsWithThemes[i][0], pairsWithThemes[i][1], mark]);
    }
    return marksPairs;
}
const marksWithPairs = getMarksPairs(pairsWithThemes);
console.log(marksWithPairs);