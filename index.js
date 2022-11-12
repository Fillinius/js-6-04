// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!')
//   if (newStudent) {
//     newStudent = newStudent.trim()
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

let i = 0
let newStudent = prompt('Введите имя нового студента!')
while (i < 3) {
  newStudent = newStudent.trim()
  alert(`Добро пожаловать, ${newStudent}!`)
  i += 1
}

// let i = 0
// let newStudent1 = prompt('Введите имя нового студента!').trim()
// do {
//   alert(`Добро пожаловать, ${newStudent1}!`)
//   i += 1
// } while (i < 3)
