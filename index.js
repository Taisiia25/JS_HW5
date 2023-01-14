// Exercise 1
console.log('Exercise 1')

// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
// при втором - суммирует переданый параметр с тем, что передали первый раз и тд. 
// Запрещается использовать глобальные переменные как хранилище результатов счетчика.
// counter(3) // 3
// counter(5) // 8
// counter(228) // 236
// etc.

function initCounter() {
    let counter = 0;    

    return function(a) { // все равно  что візвать counter
        counter += a;
        return counter;
    };
};

let counter = initCounter(); // то же самое, что вернуть функцию из  15 строки

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

// Exercise 2
console.log('Exercise 2')

// Создать функцию которая будет возвращать массив в котором будут лежать все значения - 
// аргументы переданные в данную функцию. 
// Но если мы ничего не передадим в параметрах, то массив очистится. 
// Запрещается использовать глобальные переменные как хранилище значений.

// getUpdatedArr(5) // [3, 5]
// getUpdatedArr({name: 'Vasya'}) // [3, 5, {name: 'Vasya'}]
// getUpdatedArr() // []
// getUpdatedArr(4) // [4]

function initArr() {
    let arr = [];

    return function (a) {
        if (a !== undefined) {
            arr.push(a);
        } else {
            arr = [];
        }
       return arr; 
    } 
};

let getUpdatedArr = initArr(); 


console.log(getUpdatedArr(3)); 
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));

// Exercise 3
console.log('Exercise 3')

// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. 
// Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений. 

// // Запускаем первый раз
// getTime() // 'Enabled'
// // Запускаем через 2 сек
// getTime() // 2
// // Запускаем через 3 сек
// getTime() // 3
// // Запускаем через 7 сек
// getTime() // 7
// // Запускаем через 60 сек
// getTime() // 60
// // Запускаем через 1 сек
// getTime() // 1


function getTimeDiff() {
    let time;
  
    return function() {
      if (!time) { // если время не задано
        time = new Date()
        return 'Enabled'
      }
  
      let temp = time; // присваеваем время последнего  візова
      time = new Date() // обновляем время последнего візова
      return Math.floor((time - temp)/1000)
    };
  }
  
  const getTime = getTimeDiff();

  console.log(getTime());