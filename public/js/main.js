const cityname=document.getElementById('cityname')
const submiBtn=document.getElementById('submitBtn')
const city_name=document.getElementById('city_name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')

const getInfo =async(event)=>{
    event.preventDefault()
    let cityval=cityname.value
     if(cityval===""){
        city_name.innerText=`plz write the name before search`
     }else{
       try{ let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8e25b65b96e9d587024eab0d641f2cdd`
        const response= await fetch(url)
        const data=await response.json()
        const arrData=[data]
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
        temp.innerText=arrData[0].main.temp
        temp_status.innerText=arrData[0].weather[0].main
        const tempMood=arrData[0].weather[0].main
        //condtion to check sunny
        if(tempMood=='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }else if(tempMood=='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
        }else if(tempMood=='Rain'){
            temp_status.innerHTML="<i class='fas fa-rain' style='color:a4b0be;'></i>"
        }else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
        }

    }catch{
        city_name.innerText=`plz enter the city name properly`
    }
    }
}
submitBtn.addEventListener('click',getInfo)
