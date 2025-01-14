console.log('Lets write a javascript...');

let songs = [
    "30_Minutes_Full_Relax_With_Old_Hindi_Lofi_Songs_To_Study__Chill__Refreshing__Arijit_Singh_Lofi(128k).m4a",
    "Aaj_Kal_Yaad_Kuchh_Aur_Rehta_Nahin_-_आज_कल_याद_कुछ_और_रहता_नहीं_from_Nagina__1986__by_Mohammed_Aziz(128k).m4a",
    "Aaj_Phir_Tumpe_[slowed_reverb]____REJOICE(128k).m4a",
    "Adaa__Slowed_x_Reverbed____Garam_Masala___Sonu_Nigam___Akshay_Kumar_,_John_Abraham___Model_7eventeen(128k).m4a",
    "Ankhon_me_base_ho_tum_-_Slowed___Reverb___Abhijit_,_Alka_yagnik___90s_hindi_songs_Lofi_mix(128k).m4a",
    "Chaaha_Hai_Tujhko___Aamir___Manisha___Udit_Narayan___Anuradha_Paudwal___Mann___1999____Romantic_Song(128k).m4a",
    "Dil_To_Hai_Dil_Dil_Ka_Aitbar__Slow_Reverb__Lofi_Song।_Old_is_gold(128k).m4a",
    "Ek_Din_Aap_Yun_[_Slowed___Reverb_]___90_s_songs(256k).mp3",
    "Hum_Pyaar_Hai_Tumhare___Slowed___Reverb___Top_Lofi_Songs_Kumar_Sanu___Alka_Yagnik_#lofi_#90s(128k).m4a",
    "Keh_Do_Ke_Tum_Ho_Meri_Warna__Jeena_Nahi__Lyrical_Video___Tezaab___Amit_Kumar,_Anuradha_Paudwal(128k).m4a",
    "Kishore_Kumar_LoFi_Songs___Best_of_Bollywood_LoFi_Mix_Playlist__Bheegi_Bheegi_Raaton_Mein__Raat_Kali(128k).m4a",
    "Kyon_Ki_Itna_Pyar__Full_Song__Film_-_Kyon_Ki_...It_S_Fate(128k).m4a",
    "Mat_Kar_Itna_Gurur__Slowed_x_Reverbed____Pankaj_Udhas___Alka_Yagnik___Model_7eventeen(128k).m4a",
    "Mein_Chahta_Hoon_Tujhko___Slowed___Reverb___Lo-fi_Songs_#slowreverb_#lofisong_#abhijeet_#alkayagnik(128k).m4a",
    "SOLAH_BARAS_KI_BALI_UMAR_KO_SALAM_lofi_song__slowed_reverb_(128k).m4a",
    "Tere_Chehre_Mein_Woh_Jadoo_Hai___Slowed_And_Reverb___Kishore_Kumar(128k).m4a",
    "Teri_Deewani_-_Kailash_Kher___Official_Video___Kailasa___Paresh___Naresh(128k).m4a",
    "Teri_Deewani_-_Kailash_Kher___Official_Video___Kailasa___Paresh___Naresh(256k).mp3",
    "Teri_Yaad_Yaad_Yaad___GHULAM_ALI___Bewafaa___2005(128k).m4a",
    "To_chalun_heart_touching_Ringtone____hindi_sad_song_ringtone____Border_song_ringtone(128k).mp3",
    "Tu_Meri_Zindagi_Hai__Slowed_Reverb____Kumar_Sanu_And_Anuradha_Paudwal___Aashiqui(128k).m4a",
    "Tu_Mujhe_Kabool_[Slowed_Reverb]_Lofi___Khuda_Gawah___@Sauz_Gamerz(128k).m4a",
    "Tumhe_Dil_Se_Kaise_Juda___Slowed_X_Reverb___Mohammad_Aziz___Anuradha_Paudwal(128k).m4a",
    "Tumhein_Dillagi_Bhool_Jani_Paray_Gi___Nusrat_Fateh_Ali_Khan___Lyrical_Qawwali___Shemaroo_Punjabi(128k).m4a",
    "Yaad_Tari_Zindagi_Thi_Jati_Nathi_·_Umesh_Barot_·_Dhaval_Kapadia_·_New_Gujarati_Song_2020(256k).mp3",
    "Yeh_Haseen_Vadiyan_-_Roja__A.R._Rahman__S.P._Balasubrahmanyam__K.S.Chithra__Madhoo__Arvind(128k).m4a",
    "Zaroori_Tha_~_[Slowed___Reverb]_~_Rahat_Fatey_Ali_Khan_............『IGNORE』_『BOY_』(128k).m4a",
    "aj_phir_jeene_ki_tamannah_hai_-_a_tribute_to_Lata_Mangeshkar_by_Ashwariya_Majumder___Naam_Reh_Jayega(256k).mp3",
    "mitra_dolyatlya_kajala_sarkha_#prakashgangurde_#blackscreen_#marathistatus_#mitra_#trending(128k).m4a",
    "mitra_dolyatlya_kajala_sarkha_#prakashgangurde_#blackscreen_#marathistatus_#mitra_#trending(128k).mp3",
    "mitra_dolyatlya_kajala_sarkha_#prakashgangurde_#blackscreen_#marathistatus_#mitra_#trending(256k).mp3",
    "ram_krushna_hari____jay_jay_ram_Krishna_hari____new_ringtone____#ringtone_#pandurang_#ramkrishna_#yt(256k).mp3",
    "tumhe_Dil_se_kaise_juda_hum_karenge_Mohammad_Aziz_super_hit_singer(128k).m4a",
    "tumse_milne_ki_tamanna_[slow___reverb]____Saajan______1991_____Slow_Symphony(256k).mp3",
    "हृदयी_वसंत_फुलताना___Hridayi_V(128k).m4a"
];

let currentsong = new Audio();

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

    // Clear any previous content
    songUL.innerHTML = '';

    // Loop through the song array to create the list
    for (const song of songs) {
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

    // Add event listeners for each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            const song = e.querySelector(".info").firstElementChild.innerHTML;
            playmusic(song);
        });
    });

    // Play/Pause button
    document.querySelector("#play").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector("#play").src = "pause.svg";
        } else {
            currentsong.pause();
            document.querySelector("#play").src = "play.svg";
        }
    });

    // Update song progress
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });

    // Hamburger menu (navigation)
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });

    // Previous song
    document.querySelector("#previous").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index > 0) {
            playmusic(songs[index - 1]);
        }
    });

    // Next song
    document.querySelector("#next").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index >= 0 && index < songs.length - 1) {
            playmusic(songs[index + 1]);
        }
    });

    // Volume control
    document.querySelector(".range input").addEventListener("input", (e) => {
        console.log("setting volume to", e.target.value, "/100");
        currentsong.volume = parseInt(e.target.value) / 100;
    });

    // Mute button
    document.querySelector(".volume>img").addEventListener("click", e => {
        console.log(e.target)
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentsong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 20;
        }
    })
}

main();
