let index = 0;
let audioElement = new Audio(`songs/${index+1}.mp3`);
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");


// declaring variables
let songs=[
    {songName:"Warriyo - Mortals [NCS Release]" , filePath: "songs/1.mp3" , coverPath:"covers/1.jpg" },
    {songName:"Cielo - Huma-Huma" , filePath: "songs/2.mp3" , coverPath:"covers/2.jpg" },
     {songName:"DEAF KEV - Invincible [NCS Release]-320k" , filePath: "songs/3.mp3" , coverPath:"covers/3.jpg" },
     {songName:"Different Heaven & EH!DE - My Heart [NCS Release]" , filePath: "songs/4.mp3" , coverPath:"covers/4.jpg" },
     {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release" , filePath: "songs/5.mp3" , coverPath:"covers/5.jpg" },
     {songName:"Rabba - Salam-e-Ishq" , filePath: "songs/6.mp3" , coverPath:"covers/6.jpg" },
     {songName:"Sakhiyaan" , filePath: "songs/7.mp3" , coverPath:"covers/7.jpg" },
     {songName:"Bhula Dena" , filePath: "songs/8.mp3" , coverPath:"covers/8.jpg" },
     {songName:"Tumhari Kasam " , filePath: "songs/9.mp3" , coverPath:"covers/9.jpg" },
     {songName:"Na Jaana " , filePath: "songs/10.mp3" , coverPath:"covers/10.jpg" }
    ]
    
    // lestenting events
    
    masterPlay.addEventListener("click", ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
            
            gif.style.opacity = 1;
        }
        
        else{
            audioElement.pause();

            masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
    } 
    )
    
    
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
element.addEventListener("click", (e)=>{
    
   
   makeAllPlays();
   index = parseInt(e.target.id);
   e.target.classList.remove('fa-circle-play')
   e.target.classList.add('fa-circle-pause')
   audioElement.src=`songs/${index+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity = 1;
   masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        masterSongName.innerText=songs[index].songName

})})





document.getElementById("next").addEventListener('click',()=>{
    if (index>=9) {
        index=0;
    }
    else{index +=1;}
    audioElement.src=`songs/${index+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity = 1;
   masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

}

)


document.getElementById("back").addEventListener('click',()=>{
    if (index<=0) {
        index=0;
    }
    else{index -=1;}
    audioElement.src=`songs/${index+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity = 1;
   masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

}

)

document.getElementById("fastNext").addEventListener('click',()=>{
    audioElement.currentTime += 10;
}

)
document.getElementById("fastBack").addEventListener('click',()=>{
    audioElement.currentTime -= 10;
}

)
   






audioElement.addEventListener("timeupdate" , ()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log("progress");

    myProgressBar.value = progress;

}

)

myProgressBar.addEventListener("change" , ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
}
)