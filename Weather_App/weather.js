const form = document.querySelector("section.top-banner form");
const input = document.querySelector("div.container input");
const msg = document.querySelector("span.msg");
const cityList = document.querySelector(".ajax-section .cities");

localStorage.setItem("apiKey", EncryptStringAES ("063eb3cd07c1e22529e7f0119caba4d5"))

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeateherDataFromApi();
});
//submit tuşu
const getWeateherDataFromApi = async() => {
    let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    let inputVal = input.value;
    let units = "metric";
    let lang = "tr";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${units}&lang=${lang}`

    try {
        const response = await axios(url);
        const {main, name, sys, weather} = response.data;
        //image url
        const iconUrl = `https://openweathermap.org/img/wn/${
            weather[0].icon}@2x.png`;
        console.log(response);



        //create city card when submit pressed
        let cityCardList = cityList.querySelectorAll(".city")
        let cityCardListArray = Array.from(cityCardList);
        //blocking same city result for multiple outputs
        if (cityCardListArray.length > 0){
            const filteredArray = cityCardListArray.filter(card => card.querySelector(".city-name span").innerText == name);
            if(filteredArray.length > 0){
                msg.innerText = `You already entered ${name}. Try another city`
                setTimeout(()=>{
                    msg.innerText = "";
                }, 5000)
                form.reset();
                input.focus();
                
                return;
            }
        }
        

        let createdCityCardLi = document.createElement("li");
        createdCityCardLi.classList.add("city");
        createdCityCardLi.innerHTML = `
        <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl
            }">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`;
        cityList.prepend(createdCityCardLi);
        setTimeout(()=>{
            msg.innerText = "";
        }, 5000)
        form.reset();
        input.focus();
    } catch (error) {
        msg.innerText = error;
    }
}

