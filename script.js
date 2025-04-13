const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc87ef8af123de0faa5001a68355f6a0&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=dc87ef8af123de0faa5001a68355f6a0&query="'

const main = document.getElementById('movies')
const form = document.getElementById('form')
const search = document.getElementById('search')

const footer = document.getElementById('footer')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    showMovies(data.results)
    
}



function showMovies(movies) {
    main.innerHTML = ''
    

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" style="width:100%;">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">

                <h3>${title}</h3>
                ${overview}
                <p>\n</p>
                <button class="watch-button" id="watch">▶️  Watch</button>
            </div>
        `
        main.appendChild(movieEl)

        
    })
}



function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
       
    }
})




// const watch = document.getElementById("watch")
// const content = document.getElementById("content")

// main.addEventListener("click",function(){
//     content.classList.remove("hidden")
//     content.classList.add("visible")
// })
// document.getElementsByClassName("close-button").addEventListener("click",function(){
//     content.classList.remove("visible")
//     content.classList.add("hidden")
// })



// movies.e
//     document.querySelector(".movie-info-2").innerHTML=
//     `<h3>${title}</h3>
//     <span class="${getClassByRate(vote_average)}">${vote_average}</span>`
//     document.querySelector("overview-2").innerHTML=
//     `<h3>Overview</h3>
//     ${overview}`
























// api-key : dc87ef8af123de0faa5001a68355f6a0