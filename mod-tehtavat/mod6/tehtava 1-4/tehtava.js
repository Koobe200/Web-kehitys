"use strict"

async function fetchdata(url){

    try{
        const response = await fetch(url);

        if (response.ok){
            const response_data = await response.json();
console.log(response_data)
            return response_data
        } else{
            throw new Error(`HTTP-virhe! Tilakoodi: ${response.status}`)
        }
    }catch (error) {
        console.log(`Virhe datan hakemisessa ${error}`)
    }
}

const submitInput = document.getElementsByTagName("input")[1];


function imgLoaded(isImage) {
  return isImage ? "$2.00" : "$10.00";
}

function populateData(movie, div){
    
    const moviebox = document.createElement("article");
    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.name
    moviebox.appendChild(movieTitle)
    const movieLink = document.createElement("a");
    movieLink.innerText = movie.url
    movieLink.href = movie.url
    movieLink.target = "_blank"
    moviebox.appendChild(movieLink)
    const movieImg = document.createElement("img");
    movieImg.src = movie.image ? movie.image.medium : "https://placehold.co/210x295?text=Not%20Found";
    moviebox.appendChild(movieImg)
    const movieText = document.createElement("div");
    movieText.innerHTML = movie.summary
    moviebox.appendChild(movieText)
    div.appendChild(moviebox)

}
submitInput.addEventListener("click", async (e) => {
    e.preventDefault();
    const searchUrl = "https://api.tvmaze.com/search/shows?q=";
    const searchInput = document.getElementById("query");
    console.log(searchInput.value)
    const mainDiv = document.getElementById("results")
    mainDiv.innerHTML = ""
    const fetchedData = await fetchdata(searchUrl+searchInput.value)
    for (let movie of fetchedData){
        populateData(movie.show, mainDiv)
        console.log("hi")
    }
});

