// let arr = []

// document.getElementById('addBtn').addEventListener('click', () => {
//     let std_name = document.getElementsByClassName('stdName')[0].value
//     let std_sur = document.getElementsByClassName('stdSureName')[0].value
    
//     let ol = document.getElementsByClassName('StudentWrapper')[0]
//     let std_list = document.createElement('li')

//     let btn = document.createElement('button')

//     let std_obj = {
//         name: std_name,
//         surname: std_sur,
//     }
//     arr.push(std_obj)
    
//     std_list.innerHTML = `${std_name} ${std_sur}`

//     ol.appendChild(std_list)
    
//     std_list.appendChild(btn)

//     btn.innerHTML = 'Удалить'

//     btn.addEventListener('click', () => {
//         std_list.remove()
//     })
// })

// let cat = {
//     name: 'murka',
//     age: 15,
// }

// console.log(`Имя кошки: ${cat.name}, Возраст кошки ${cat.age}.`);

// let car = {
//     marka: 'gentra',
//     year: 2023,
// }

// console.log(`Макрка машины: ${car.marka}, Год выпуска машины: ${car.year}.`);

// car.year = 2022
// console.log(`Макрка машины: ${car.marka}, Год выпуска машины: ${car.year}.`);

// let book = {
//     book_name: 'book name',
//     author: 'aleks',
//     year_of_book: 2001,
// }

// console.log(`Навзвание книги: ${book.name}, Автор книги: ${book.author}, Дата издательсва: ${book.year_of_book}.`);

// book.janr = 'novel'
// console.log(`Навзвание книги: ${book.name}, Автор книги: ${book.author}, Дата издательсва: ${book.year_of_book}, Жанр: ${book.janr}.`);


// let std = {
//     name: 'aleks',
//     age: 22,
//     gpa: 3.8,
// }

// console.log(`Имя студента: ${std.name}, Возраст студунта: ${std.age}, Средний бал студента: ${std.gpa}.`);

// std.gpa = 4
// console.log(`Имя студента: ${std.name}, Возраст студунта: ${std.age}, Средний бал студента: ${std.gpa}.`);


// let fruits = {
//     name: 'apple',
//     color: 'green',
//     taste: 'tasty'
// }

// console.log(`Название фрукта: ${fruits.name}, Цвет фрукта: ${fruits.color}, Вкус: ${fruits.taste}.`);

// fruits.amount = 4
// console.log(`Название фрукта: ${fruits.name}, Цвет фрукта: ${fruits.color}, Вкус: ${fruits.taste}, Колтчество: ${fruits.amount}.`);


// async function getChuckNorrisJoke () {
//     try {
//         const url = 'https://api.chucknorris.io/jokes/random'
//         const response = await fetch(url)

//         const data = await response.json()
//         const joke = data.value
        
//         console.log(joke)


//         // let div = document.createElement('div')
//         // document.body.appendChild(div)
//         // div.innerHTML = joke
//     } catch(error) {
//         console.log('Произошла ошибка')
//     }
// } 

// getChuckNorrisJoke()

