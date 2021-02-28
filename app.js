//Form
var button= document.querySelector('.icon'); 
var input= document.querySelector('#city-input'); 
// //City & weather
// var city= document.querySelector(''); 
// var weather= document.querySelector('');
// //Temperature
// var currentTemp= document.querySelector('');
// var minTemp= document.querySelector('');
// var maxTemp= document.querySelector('');
// //Info
// var wind= document.querySelector('');
// var humidity= document.querySelector('');
// var pressure= document.querySelector('');
// var icon= document.querySelector('');

//Open weather API key: 
const apiKey= 'bd1fbea32cf38327b8a70a24a38fc190'; 


//Button Event listener 'click' 
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&appid=bd1fbea32cf38327b8a70a24a38fc190')
    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)
})
})