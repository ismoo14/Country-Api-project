let allcountrieadata = [];

function getdata2(){
    fetch("data.json")
    .then((response) => response.json())
    .then(data => {
        allcountrieadata =data;
        displaycountries(allcountrieadata)
    })
}

function displaycountries(countriestodisplay){
    const popo = document.querySelector(".display")
    popo.innerHTML = '';

    countriestodisplay.forEach((datas, i) => {
        const countrycard = document.createElement("div")
        countrycard.className = 'country-card';

        countrycard.innerHTML = `

            <div class = " container"> 
            <button class = "don"> <img src = "${datas.flags.png}" class = "flag-img"> </button>
            <h2 class = "names"> ${datas.name}</h2>
            <h2 class = "popul"> Population: ${datas.population}</h2>
            <h2 class = "region"> Region:${datas.region}</h2>
            <h2 class = "capital"> Capital:${datas.capital}</h2>
            </div>
            `;

            popo.appendChild(countrycard)
            countrycard.addEventListener('click', () => {
    displayCountryDetails(datas);
});
    })

}

const regionfilter = document.getElementById("region-filter")

regionfilter.addEventListener("change", (event) => {
    const selectedregion = event.target.value;

    if(selectedregion === "all"){
        displaycountries(allcountrieadata)
    }else{
        const filterdcountries = allcountrieadata.filter(country => country.region === selectedregion);
        displaycountries(filterdcountries)
    }
})
displaycountries(allcountrieadata)



const searchinput = document.querySelector(".search-1")

searchinput.addEventListener("input", (event) => {
    const searchterm = event.target.value.toLowerCase();
    const filtercountries = allcountrieadata.filter(country => {
        return country.name.toLowerCase().includes(searchterm)
    })
    displaycountries(filtercountries)
})
getdata2()


function displayCountryDetails(datas) {
    document.querySelector(".display").classList.add("display1");
    document.querySelector(".section-1").classList.add("section-11")


    const detailsContainer = document.getElementById("country-detail-page");

    detailsContainer.style.display = 'block';

    detailsContainer.innerHTML = `
        <button id="back-button">← Back</button>
        <div class="country-details">

            <div class = "firist-1"> 
            <img src="${datas.flags.png}" alt="Flag of ${datas.name.common}" class =  "img-2">
            </div> 

            <div class = "firist-2">
                <h2 class = "name-11">${datas.name}</h2>
                <br>
                <div class = "second-1"> 

                <div class = "second-2"> 
                <p class = "name-1"><strong>Native Name:</strong> ${datas.nativeName}</p>
                <p class = "name-1"><strong>Population:</strong> ${datas.population.toLocaleString()}</p>
                <p class = "name-1"><strong>Region:</strong> ${datas.region}</p>
                <p class = "name-1"><strong>Sub Region:</strong> ${datas.subregion}</p>
                <p class = "name-1"><strong>Capital:</strong> ${datas.capital}</p>
                </div>

                <div class = "second-3"> 
                <p class = "name-1"><strong>Top Level Domain:</strong> ${datas.topLevelDomain[0]}</p>
                <p class = "name-1"><strong>Currencies:</strong> ${datas.currencies ? Object.values(datas.currencies).map(c => c.name).join(', ') : 'N/A'}    
                </p>
                <p class = "name-1"><strong>Languages:</strong> ${datas.languages.map(lang => lang.name).join(', ')}</p>
                </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector("#back-button").addEventListener('click', () => {
        detailsContainer.style.display = 'none';
        document.querySelector(".display").classList.remove("display1");
        document.querySelector(".section-1").classList.remove("section-11");
    });
}



const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const sunbtn = document.querySelector(".sun-btn")
const moonbtn = document.querySelector(".moon-btn")
const filter = document.getElementById("region-filter")
const where = document.querySelector(".where")
const popul1 = document.querySelector(".popul")
const names = document.querySelector(".names")