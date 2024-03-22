const accessKey = "NrH1aM04AQpSEVL3eFt4GvjTp3PT-RdW0QtXzyeD2rI";

const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('btn');
const searchResult = document.getElementById('searchResult');
const showMoreBtn = document.getElementById('showMore');

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1)
    {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{

        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_blank";
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", function(){
    page++;
    searchImages();
});