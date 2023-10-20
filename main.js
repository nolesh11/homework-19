

let searchBtn = document.getElementById('searchButton')

searchBtn.addEventListener('click', getFilm)


async function getFilm () {
    let searchInput = document.getElementById('searchInput').value
    let movieInfo = document.getElementById('movieInfo')
    let img = document.querySelector('.img')
    let h2 = document.querySelector('.title')
    let type = document.querySelector('.type')
    let year = document.querySelector('.year')
    let runTime = document.querySelector('.runTime')
    let genre = document.querySelector('.genre')
    let director = document.querySelector('.director')

    try {
        let url = `http://www.omdbapi.com/?t=${searchInput}&i=tt3896198&apikey=83199631`
        let response = await fetch(url)
        let data = await response.json()
        
        img.src = data.Poster
        h2.innerHTML = data.Title
        type.innerHTML = data.Type
        year.innerHTML = data.Year
        runTime.innerHTML = data.Runtime
        genre.innerHTML = data.Genre
        director.innerHTML = data.Director

    } catch (err) {
        throw err
    }
}
// getFilm()
