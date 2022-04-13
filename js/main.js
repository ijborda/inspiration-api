// Use strict
"use strict";

// Load background
fetch('https://pixabay.com/api/?key=26730821-b16b9a863dcaf46bb73ee82b9&q=nature&image_type=background&safesearch=true&per_page=200')
    .then(res => res.json())
    .then(data => {
        let imgURL = data.hits[Math.ceil(Math.random() * 200)].largeImageURL
        document.querySelector('.bg').style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${imgURL}) no-repeat center center`
        document.querySelector('.bg').style.backgroundSize = `cover`
    })
    .catch(err => `Error: ${err}`)

// Load quotation
fetch('https://api.goprogram.ai/inspiration')
    .then(res => res.json())
    .then(data => {
        document.querySelector('h1').innerHTML = data.quote;
        document.querySelector('span').innerHTML = data.author;
    })
    .catch(err => `Error: ${err}`)