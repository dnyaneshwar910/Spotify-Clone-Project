console.log('Lets write a javascript...');

let songs = [];
let currentsong = new Audio();

async function getsongs(floder) {
    let response = await fetch("http://127.0.0.1:5500/spotify%20Project/songs/");
    let text = await response.text();
    console.log(text);

    let div = document.createElement("div");
    div.innerHTML = text;
    let as = div.getElementsByTagName("a");
    songs = [];

    for (let element of as) {
        if (element.href.endsWith(".mp3") || element.href.endsWith(".m4a")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playmusic = (track) => {
    currentsong.src = "songs/" + track;
    currentsong.play();
    document.querySelector("#play").src = "pause.svg";
    document.querySelector(".songinfo").innerHTML = track;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

async function main() {
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    let songsList = await getsongs();

    console.log(songsList);

    // Clear any previous content
    songUL.innerHTML = '';

    for (const song of songsList) {
        songUL.innerHTML += `
            <li>
                <img class="invert" src="music.svg" alt="music">
                <div class="info">
                    <div>${song}</div>
                    <hr>
                    <div>DD Music</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                    <img class="invert" src="play.svg" alt="">
                </div>
            </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            const song = e.querySelector(".info").firstElementChild.innerHTML;
            playmusic(song);
        });
    });

    document.querySelector("#play").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector("#play").src = "pause.svg";
        } else {
            currentsong.pause();
            document.querySelector("#play").src = "play.svg";
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });

    document.querySelector("#previous").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index > 0) {
            playmusic(songs[index - 1]);
        }
    });

    document.querySelector("#next").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index >= 0 && index < songs.length - 1) {
            playmusic(songs[index + 1]);
        }
    });

    document.querySelector(".range input").addEventListener("input", (e) => {
        console.log("setting volume to", e.target.value, "/100");
        currentsong.volume = parseInt(e.target.value) / 100;
    });

    //add event listener for mute

    document.querySelector(".volume>img").addEventListener("click", e=>{
        console.log(e.target)
        if(e.target.src.includes("volume.svg"))
        {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentsong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 20;

        }


    })

    
}

main();
