// В каком порядке будут выведены консоли и какие именно?
// const p = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// })
//   .catch((error) => console.log('1-я', error.message))
//   .catch((error) => console.log('2-я', error.message));

//console.log('1-я', error.message))

// const p2 = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// });

// тут обе консоли, потому что нет цепочки, каждый catch отрабатывает отдельно
// p2.catch((error) => console.log('3-я', error.message));
// p2.catch((error) => console.log('4-я', error.message));

//console.log('3-я', error.message))
//console.log('4-я', error.message))

// const p3 = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// })
//   .then((error) => console.log('5-я', error.message)) // ? бесполезный обработчик положительного ответа
//   .catch((error) => console.log('6-я', error.message)); // ? будет отлов ошибки

//console.log('6-я', error.message))

// в каком порядке будут выведены консоли и что в них будет?
// setTimeout(() => {
//   console.log('timeout')
// }, 0);
//
// const p = new Promise((resolve, reject) => {
//   console.log('Promise creation');
//   resolve()
// })
//
// const p2 = new Promise((resolve, reject) => {
//   console.log(123)
// })
//
// p.then(() => {
//   console.log('Promise resolving');
// })
//
// console.log('End')
//
// console.log('p2 =>>', p2)

//Promise creation
//123
//End
// 'p2 =>>' pending
//Promise resolving
//timeout

// в каком порядке будут выведены консоли и что в них будет?
// console.log('script start'); // ? 1) синхронно, script start
//
//
// setTimeout(function() {
//   console.log('setTimeout'); // ? 5) макрозадача, setTimeout
// }, 0);
//
//
// Promise
//   .resolve()
//   .then(function() {
//     console.log('promise1'); // ? 3) микрозадача, promise1
//   })
//   .then(function() {
//     console.log('promise2'); // ? 4) микрозадача, promise2
//   });
//
//
// console.log('script end'); // ? 2) синхронно, script end

//script start
//script end
//promise1
//promise2
//setTimeout

// let a
// let p4 = new Promise(function (resolve) {
//   console.log('TEST A1', a)
//   a = 25
//   setTimeout(() => {
//     console.log('TEST A2', a)
//     resolve(a)
//   }, 100)
// })
// setTimeout(function timeout() {
//   a = 10
//   console.log('TEST A3', a)
// }, 100)
// p4.then(function (b) {
//   console.log('TEST A4', a)
// })
// console.log('TEST A5', a)

//'TEST A1', undifined
//'TEST A5', 25
//'TEST A2', 25
//'TEST A4', 25
//'TEST A3', 10

// Объяснить код, рассказать какие консоли и в какой последовательности будут, а затем предложить более оптимальное решение

// function resolveAfter2Seconds(x) {
//   console.log(`Какой Х пришёл -> ${x}`)
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x)
//     }, 2000)
//   })
// }
//
// async function add1(x) {
//   console.log('add1 Hello')
//   const a = await resolveAfter2Seconds(20)
//   const b = await resolveAfter2Seconds(30)
//   console.log('add1 Bye')
//   return x + a + b
// }
//
// add1(10).then(console.log)

//add1 hello
//20
//30
//add1 bye
//60

// async function add2(x) {
//   console.log('add2 Hello')
//   const p_a = resolveAfter2Seconds(1)
//   const p_b = resolveAfter2Seconds(2)
//   const p_c = resolveAfter2Seconds(3)
//   const p_d = resolveAfter2Seconds(4)
//   console.log('add2 Bye')
//   return x + await p_a + await p_b + await p_c + await p_d
// }
//
// add2(10).then(console.log)