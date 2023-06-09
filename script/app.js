Location =(event)=>{
    if(event.key==="Enter" || event.type==="click"){  //its not Click smh
        ApiFetch();
    }
}
const key = "6560a1063d7bf4bde0ddb9c8d624c416";
const token="9ff6265341be45ffaf4bf00c4b9f2e8b";
const ApiFetch=()=>{
    const input_text=document.getElementById("input-text");
    const cityname=input_text.value;
    if(cityname.trim()===""){
        alert("yo no-where is a planet in marvels duh not earth");
        return;
    }
    input_text.value="";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`)
        .then((response)=>{
            if(!response.ok){
                alert("Check the spelling or enter a valid city name please :)");
                return;
            }
            return response.json();
        })
        .then(h_data=> {
            const local=document.getElementById("place");
            local.innerText=`${h_data.name}, ${h_data.sys.country}`
            let h_temp=document.getElementById("temp");
            h_temp.innerText= `${parseInt(h_data.main.temp-273)}ºᶜ`;
            let h_desc=document.getElementById("desc");
            h_desc.innerText=h_data.weather[0].main;
            let b_desc=document.getElementById("b_desc");
            b_desc.innerText=`\" ${h_data.weather[0].description} \"`;
            h_container_1=document.getElementById("container_1");
            h_container_1.innerText=`Real Feel: ${parseInt(h_data.main.feels_like-273)}ºᶜ
            Maximum Temperature: ${parseInt(h_data.main.temp_max-273)}ºᶜ
            Minimum Temperature: ${parseInt(h_data.main.temp_min-273)}ºᶜ`;
            let c1=document.getElementsByClassName("container_1");
            c1[0].innerText=`Cloud Percent: ${h_data.clouds.all} %
            Preassure: ${h_data.main.pressure} hPa`;
            c1[1].innerText=`Humidity: ${h_data.main.humidity} %
            Wind Speed: ${parseInt(h_data.wind.speed)} m/s`;
            fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${token}&location=${h_data.name}`)
            .then((response)=> response.json())
            .then(data=>{
                // console.log(data);
                const time=document.getElementById("time");
                time.innerText=String(data.datetime).slice(11,16);
            })
            
        })
    }

// const time=document.getElementById("time");
// let date= new Date();
// time.innerText=String(date).slice(16,21);
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${key}`)
        .then((h_response)=>h_response.json())
        .then(h_data=> {
            let h_temp=document.getElementById("temp");
            h_temp.innerText= `${parseInt(h_data.main.temp-273)}ºᶜ`;
            let h_desc=document.getElementById("desc");
            h_desc.innerText=h_data.weather[0].main;
            let b_desc=document.getElementById("b_desc");
            b_desc.innerText=`\" ${h_data.weather[0].description} \"`;
            h_container_1=document.getElementById("container_1");
            h_container_1.innerText=`Real Feel: ${parseInt(h_data.main.feels_like-273)}ºᶜ
            Maximum Temperature: ${parseInt(h_data.main.temp_max-273)}ºᶜ
            Minimum Temperature: ${parseInt(h_data.main.temp_min-273)}ºᶜ`;
            let c1=document.getElementsByClassName("container_1");
            c1[0].innerText=`Cloud Percent: ${h_data.clouds.all} %
            Preassure: ${h_data.main.pressure} hPa`;
            c1[1].innerText=`Humidity: ${h_data.main.humidity} %
            Wind Speed: ${parseInt(h_data.wind.speed)} m/s`;
            // console.log(h_data);
            fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${token}&location=${h_data.name}`)
            .then((response)=> response.json())
            .then(data=>{
                // console.log(data);
                const time=document.getElementById("time");
                time.innerText=String(data.datetime).slice(11,16);
            })
        })
