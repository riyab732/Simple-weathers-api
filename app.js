var button =document.querySelector('.button');
var inputcity =document.querySelector('.inputcity');
var names =document.querySelector('.names');
var desc =document.querySelector('.desc');
var temp=document.querySelector('.temp');
button.addEventListener('click',function(){
fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid=8eee59776ef8ac5b404258ea10c261fd')
.then(response => response.json())
.then(data => {
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var descValue = data['weather'][0]['description'];
names.innerHTML = nameValue;
temp.innerHTML = tempValue-"273";
desc.innerHTML = descValue;
})
.catch(err => alert("city not found"))
})