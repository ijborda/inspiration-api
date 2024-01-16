// Use strict
'use strict';

// Load background
fetch(
	`https://pixabay.com/api/?key=${config.apiKeyBg}&q=nature&image_type=background&safesearch=true&per_page=200`
)
	.then((res) => res.json())
	.then((data) => {
		let imgURL = data.hits[Math.ceil(Math.random() * 200)].largeImageURL;
		document.querySelector(
			'.bg'
		).style.background = `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${imgURL}) no-repeat center center`;
		document.querySelector('.bg').style.backgroundSize = `cover`;
	})
	.catch((err) => `Error: ${err}`);

// Load quotation
fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
	method: 'GET',
	headers: { 'X-Api-Key': config.apiKeyQu },
})
	.then((res) => res.json())
	.then((data) => {
		document.querySelector('h1').innerHTML = data[0].quote;
		document.querySelector('span').innerHTML = data[0].author;
	})
	.catch((err) => `Error: ${err}`);
