var arr = [{ name: "Jale2", url: "./songs/Main Tane Se Pyari Tu Pyara Mera(PagalWorld.com.sb).mp3", image: "./images/jale2.jpeg" },
    {name: "Sun Sathiyan", url: "./songs/02 - ABCD2 - Sun Saathiya .mp3", image: "./images/sunsathiyan.jpeg"},
    {name: "Aoo Raja", url: "./songs/02 - Aao Raja - Gabbar is Back 192 kbps .mp3", image: "./images/aooraja.jpeg"},
    { name: "Ek Do Teen", url: "./songs/04 Ek Do Teen - Baaghi 2 - 190Kbps.mp3", image: "./images/ekdoteen.jpeg" }]
    
const allsong = document.querySelector(".songslist");
var poster = document.querySelector(".left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var selectedsong = 0;

var audio = new Audio();
function mainfunction()
{
    var clutter = "";
arr.forEach((elem,idx) =>
{
    clutter +=`<div class="songcard" id=${idx}>
                    <img src=${elem.image} alt="">
                    <h4>${elem.name}</h4>
                    <h6>4:04</h6>
                </div>`
})
    allsong.innerHTML = clutter;
    
    audio.src = arr[selectedsong].url;
    poster.style.backgroundImage=`url(${arr[selectedsong].image})`
}
mainfunction();

allsong.addEventListener("click", (e) =>
{
    selectedsong = e.target.id;
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1;
    mainfunction();
    audio.play();
})
var flag = 0;
play.addEventListener("click", function ()
{
    if (flag === 0)
    {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainfunction();
        audio.play();
        flag = 1;
    }
    else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainfunction();
        audio.pause();
        flag = 0;
    }
})

forward.addEventListener("click", () =>
{
    if (selectedsong < arr.length - 1)
    {
        selectedsong++;
        mainfunction();
        audio.play();
        backward.style.opacity = 1;
    }
    else {
        forward.style.opacity = 0.3;
    }
})
backward.addEventListener("click", () =>
{
    if (selectedsong > 0 )
    {
        selectedsong--;
        mainfunction();
        audio.play();
        forward.style.opacity = 1;
    }
    else {
        backward.style.opacity = 0.3;
    }
})