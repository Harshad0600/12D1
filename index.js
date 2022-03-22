async function fetchweather(){
    var request=new XMLHttpRequest();
    city=document.getElementById("city").value;    
    var key="0732990bc3ffc9f054f5f0bde35c9dc7"
    var url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=0732990bc3ffc9f054f5f0bde35c9dc7';
    request.open("GET",url,true)
    request.onload=function(){
    var result=JSON.parse(this.response)
    console.log(result);
    console.log(result.main.temp);
}
   request.send();
}