// Use strict
"use strict";

// Load background
fetch(`https://pixabay.com/api/?key=${config.apiKey}&q=nature&image_type=background&safesearch=true&per_page=200`)
    .then(res => res.json())
    .then(data => {
        let imgURL = data.hits[Math.ceil(Math.random() * 200)].largeImageURL
        document.querySelector('.bg').style.background = `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${imgURL}) no-repeat center center`
        document.querySelector('.bg').style.backgroundSize = `cover`
    })
    .catch(err => `Error: ${err}`)

// Load quotation
fetch('https://api.goprogram.ai/inspiration')
    .then(res => res.json())
    .then(data => {
        document.querySelector('h1').innerHTML = data.quote
        document.querySelector('span').innerHTML = data.author
    })
    .catch(err => `Error: ${err}`)