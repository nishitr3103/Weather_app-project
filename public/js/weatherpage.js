
const form = document.querySelector('form');
const loca= document.querySelector('input');
const msg1= document.querySelector('#message1')
const msg2= document.querySelector('#message2')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=loca.value;
    //console.log(location);
    fetch('http://api.weatherstack.com/current?access_key=7c5815294d4b4873635a53e7fcda49cd&query='+encodeURIComponent(location)).then((res)=>{
    res.json().then((data)=>{
        if(data.error){console.log('Enter correct location')
            msg1.textContent="Invalid location !!!"
            msg2.textContent="Please enter correct address";    
        }
        else{
            console.log(data.location.name+', '+data.location.region+", " +data.location.country
            + '\n' +' '+data.current.weather_descriptions[0] +' '+ data.current.temperature+' '+data.current.weather_icons[0]);

            msg1.textContent=data.location.name+', '+data.location.region+", " +data.location.country; 
            msg2.textContent= 'Temperature is '+data.current.temperature+" degree C, "+data.current.weather_descriptions[0]+" and Humidity is "+data.current.humidity+'%'; 
           // message3.textContent=data.current.weather_icons[0];
        }
    })    
    });
})


