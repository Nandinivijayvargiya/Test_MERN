var convert_to_json = function(response)
    {
            return response.json();
    }

var handle_data = function(res) 
    {
        var city_name=document.getElementById('city_name');
        city_name.innerText=res.name+" "+res.sys.country;
        var image=document.getElementById('image');
        var icncode = res.weather[0].icon;
        image.src = `http://openweathermap.org/img/w/${icncode}.png`;
        var sky_type = document.getElementById('sky_type');
        sky_type.innerText=res.weather[0].description;
        var pr = document.getElementById('temp');
        pr.innerText= "Temperature:-"+res.main.temp;
        var max_temp=document.getElementById('max_temp');
        max_temp.innerText="Maximum Temperature:-"+res.main.temp;
        var feel_like=document.getElementById('feel_like');
        feel_like.innerText="Feels Like:-"+res.main.feels_like;
        var min_temp=document.getElementById('min_temp');
        min_temp.innerText="Minimum Temperature:-"+res.main.temp_min;
        var wind=document.getElementById('wind');
        wind.innerText="Wind Speed:-"+res.wind.speed;
       }
var main_fn=function(name)
    {
        var input=document.getElementById("input_field");
        var city_val=input.value;
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city_val+'&units=metric&appid=79374c70b20aea3c47ef644e2c5828a8').then(convert_to_json).then(handle_data);
        var btn=document.getElementById("search_btn");
        var content=document.getElementById("info_content");
        content.style.display="flex";
        content.style.justifyContent="center";
    }
var btn=document.getElementById("search_btn");
btn.addEventListener('click',main_fn);
