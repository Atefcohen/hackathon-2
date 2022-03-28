 function  generateVideo(){
  console.log(1234)
   fetch('http://localhost:8000/getrandom')
   .then(res => res.json())
   
   .then(data =>{
    let video = data.map(e => e.URL);
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    let url=video[getRandomInt(video.length)];
    console.log(url)
    let source = document.getElementById("videoSource")
    source.src = url
   })




    
   
    
}

 let button = document.getElementById('video1')
 button.addEventListener("click", generateVideo)