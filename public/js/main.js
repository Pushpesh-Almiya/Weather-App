const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById("temp_status");
const day = document.getElementById('day')
const today_date = document.getElementById('today_date')

const dataHide = document.querySelector('.middle_layer')
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText="Please enter a city name";
        dataHide.classList.add('data_hide')
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=30a520eec68f730f96c9ca5ceea3d445`
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name} | ${arrData[0].sys.country}`;
            temp_status.innerText= arrData[0].weather[0].main;
            temp.innerText = arrData[0].main.temp;

            //Condition for temperature status....
            const temMod = arrData[0].weather[0].main;
            if(temMod== "Clear"){
                temp_status.innerHTML ="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(temMod== "Clouds"){
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(temMod== "Rain"){
                temp_status.innerHTML ="<i class='fas fa-rain' style='color:#a40be;'></i>"
            }else{
                temp_status.innerHTML ="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            dataHide.classList.remove('data_hide')
            
        } catch (error) {
            city_name.innerText= 'City Not Found'
            dataHide.classList.add('data_hide')
        }
    }
}
let week = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"]
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev",];
const date = new Date()
let Today= date.getDay()
let currentDate = date.getDate()
let month = date.getMonth()
day.innerText = week[Today];
today_date.innerText= `${currentDate} ${months[month]}`
submitBtn.addEventListener('click',getInfo)