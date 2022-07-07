


var bn=document.getElementById('bn');

bn.addEventListener('click',myfun)
function myfun(){
    var city=document.getElementById('city');
    // var lon=document.getElementById('lon');
    // console.log(city.value)
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=5dc126b6bf7b51c2c1f9d10b01696481&units=metric`;
    weather(url);
}


function weather(url){
    var city=document.getElementById('city');
    ///////
    var map=document.getElementById('container2');
    map.innerHTML=`<div class="mapouter" style='border:4px solid black'><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=271&amp;height=252&amp;hl=en&amp;q=${city.value}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">Friday Night Funkin Mods</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:252px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:252px;}.gmap_iframe {height:252px!important;}</style></div>`;
    // map.style.border='2px solid black'
    // console.log(map.innerHTML)
    /////
fetch(url).then((response)=>{
    return response.json()
}).then((data)=>{
    //console.log(data)
    var a=document.querySelector('#container1');
    var cloudImage=document.getElementById('container3')
    cloudImage.innerHTML='';
    a.innerHTML='';
    var b=document.createElement('p');
    var b1=document.createElement('p');
    var b2=document.createElement('p');
    var b3=document.createElement('p');
    var b4=document.createElement('p');
    var b5=document.createElement('p');
    var b6=document.createElement('p');
    var b7=document.createElement('p');
    var b8=document.createElement('img');
    // var b9=<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=561&amp;height=484&amp;hl=en&amp;q=patna&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">Friday Night Funkin Mods</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:484px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:484px;}.gmap_iframe {height:484px!important;}</style></div>;
    if(data['weather'][0]['main']=='Rain'){
        b8.src='https://i.pinimg.com/originals/bb/d1/b0/bbd1b00158eb5ecc1bbb021b6b80a46e.gif';
    }else if(data['weather'][0]['main']=='Clouds'){
        b8.src='https://c.tenor.com/PLqmB_SmXQMAAAAM/clouds-sky.gif';
    }else if(data['weather'][0]['main']=='Haze'){
        b8.src='https://media3.giphy.com/media/9GIEZ60FUeeSAPyltp/giphy.gif';
    }else if(data['weather'][0]['main']=='Clear'){
        b8.src='https://i.gifer.com/XFbw.gif';
    }


    b.innerText="Place:- "+ data['name'];
    b1.innerText='Temperatue:- '+data['main']['temp']+'°C';
    // b2.innerText='Pressure:- '+data['main']['pressure'];
    b3.innerText='Humidity:- '+data['main']['humidity'];
    b4.innerText='Wind Speed:- '+data['wind']['speed'];
    // b5.innerText='Sunrise:- '+data['sys']['sunrise'];
    // b6.innerText='Sunset:- '+data['sys']['sunset'];
    b7.innerText='Weather:- '+data['weather'][0]['main'];
    b2.innerText='Weather Description:- '+data['weather'][0]['description']
    // b9.innerHTML=
    cloudImage.append(b8)
    a.append(b,b1,b3,b4,b5,b6,b7,b2);

}).catch((error)=>{
    var a=document.querySelector('#container1');
    a.innerHTML='';
    var img=document.createElement('img');
    img.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADSCAMAAAD5TDX9AAAAYFBMVEX19fWZmZkzMzOEhITZ2dnu7u5HR0dWVlahoaGysrJ7e3vW1ta7u7vc3NxOTk7f399dXV3Ly8upqam4uLg4ODhnZ2fp6ek/Pz+zs7N0dHSKiopubm7ExMSWlpbl5eWlpaUhZLfyAAAEYElEQVR4nO2c65KiMBBGQQdEAbmIoKLM+7/lGm6BkBZ0tibT1Hd+7Gqla+2zSToBg5YFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjhhMkpTT3b9tL0lISO6Xz+I3mytxXSZCWC4UStYR+azuznRITbGvzyC+0muHAen773Wu5ZZHzTOX5MMOcmCExn+RnOixk3mn0cR2eeLpN7rg789JzFchz1JsMy6BWcyXzcm8z0A6YFZVAc/Ukjr9Iyzd9OZGsybeW0MDiade61nZeby/ZdTtP0Z+zsk7ls3yTSZD+0u+vaI3P5vod2Gb/Ldq0dl7oZ6pKftePSefod2KDo6/efPDrP0eY+b2ez2LHoKuIiu4T+N/8OxAZzUPKJS1oOQ5MYmAvsOAxNfcW07YsMoS78GNxmIabdcNxRdgwmnm4XpthRl34MrhSo1NO3Qv4qC1L/5mtH3eT7liGUnWcu66UQmQ/tyLuc5rJeCpX5oGMY21GpD+wW/Af8Vcg7fTKEimBQVX5gx2CjSa3m0o7aiXK4t0LtxOz+rpf2touAwU6M2kXb3r6FLJkMdtHkuJuHwRUQXVbmYFBUXky8ORhMO8vKieT7rwo0XzLUcBiY5MWpDNC3sxiYZNWUAfp2BhWzRt95sp1z11GdJ9tZdx1xS08261oZ7MI6dN9OvrbzeBTMBl3Rl62aRk7fLGu/KpCN0zYG9/pGTOvmi9WcTb3sWPdpnHWfpFr5KThr3ScYrZWfPn2OzpmTwyemo7Jjzae+BWs+sS9wVvy0RY0TJkH3pEywridlAAAAAAAAAAAAAAAAAABglM3Xb3/i1u2PcQfubPCmZffRZxmw2xy6lzq7/egMyvYaNVQffZYBu23RnVzT2d3GdodpxBsYsHukbtsTGjsnZm53s87X5mVr53hxke0e4pvHW1bPsv7HDUZ2gziZeLgR74/+1+GYFef2mEd1a95kJuyionkQubHL4/gURUG8q3t0R/bdOE6xe7i2X/mPrB70kXu+V+Fl923AbmtZ7dhs7A7nujeccyn+ou3GcYpd1hzb9+ra2kRY+dFEVXn+UdZjs7YLN+3Bmq/6BWmnxCl27ViPNpUIaNs8Q3ZRISRqu7RfymLxlKBit8ka9mqcYtc9PyrM+0jfkJ2VFlVrd7t2LQfRUYpd6Tfkapxi1y0ywq6PzE3ZWWXZ2snBV2dFjkwlTrHrzsQJOxlpzK4q0iV9J+2IvvOndn2kY8zO2hfRvZ53x65FN++knRLX1Zj71M6L2zfG5t2Ta5kIu0qpmaNHdAd2Spzb/t7RY2qXZO1eKDVoV7nber3bxsN1rLyNggfr3Tju2g5wd2pnxU2bszOzmjdcNrWdc94N9iBpEeRVf0UwtBvH+dk2qfz0aGvsfPea5FUQezuDdta13Wd+i/1j9xidd8zc/hdjxvvMUVxSFtnTwtHYtfvMu1X+uh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBq+Qcf9zKBTrP28AAAAABJRU5ErkJggg=='

    var b1=document.createElement('p');
    b1.innerText=':-( wrong coordinate';
    a.append(b1,img)
    console.log('wrong coordinate')
})

// map.innerHTML=<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=561&amp;height=484&amp;hl=en&amp;q=patna&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">Friday Night Funkin Mods</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:484px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:484px;}.gmap_iframe {height:484px!important;}</style></div>;


}