const Note = document.getElementById('note');
const averageNote = document.getElementById('average_note');
const minNote = document.getElementById('min_note');
const maxNote = document.getElementById('max_note')
const Positive = document.getElementById('positive');
const Negative = document.getElementById('negative')
const Grades = document.getElementById('grades_')

let grades = new Array(); //пустой массив

for (let i = 0; i <= 13; i++) {
let item = Math.floor(Math.random() * 100 + 1); // заполните массив случайными оценками от 1 до 100 для 12 студентов.
grades.push(item);
}
console.log(grades);
Note.textContent = grades;

let sum = grades.reduce((acc, item) => acc + item); //Рассчитайте и выведите средний балл студентов, используя методы массивов.
let average = (sum / 12).toFixed(2);
console.log(average);
averageNote.textContent = average;

const sortedArray = sorted(grades) // рассортировала для простоты выполнения следущих двух задач
function sorted(item){
    item.sort(function (a, b) {
        return a - b;
    })
    return item;
}
// console.log(sortedArray);
let min = sortedArray.shift();
console.log(min) //минимальный балл среди студентов
minNote.textContent = min;

let max = sortedArray.pop();
console.log(max); // максимальный балл среди студентов
maxNote.textContent = max;

const filtredArray1 = grades.filter(item => item >= 60);
let positiveStudents = filtredArray1.length;
console.log(positiveStudents); // количество студентов, получивших положительную оценку
Positive.textContent = positiveStudents;

const filtredArray2 = grades.filter(item => item < 60);
let negativeStudents = filtredArray2.length
console.log(negativeStudents); //количество студентов, получивших отрицательную оценку 
Negative.textContent = negativeStudents;

const modifyedArray = grades.map((item) => {
    if (item < 20){
        return 'E';
    };
    if (item >= 20 && item <= 39){
        return 'D';
    }
    if (item >= 40 && item <= 59){
        return 'C';
    }
    if (item >= 60 && item <= 79){
        return 'B';
    }
    if (item >= 80){
        return 'A';
    }
    
});
console.log(modifyedArray)
Grades.textContent = modifyedArray;
