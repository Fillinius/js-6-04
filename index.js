// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!')
//   if (newStudent) {
//     newStudent = newStudent.trim()
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

// let i = 0
// while (i < 3) {
//   let newStudent = prompt('Введите имя нового студента!')
//   newStudent = newStudent.trim()
//   alert(`Добро пожаловать, ${newStudent}!`)
//   i += 1
// }

let i = 0

do {
  let newStudent1 = prompt('Введите имя нового студента!').trim()
  alert(`Добро пожаловать, ${newStudent1}!`)
  i += 1
} while (i < 3)
