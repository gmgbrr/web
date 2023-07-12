const audioBreak = document.getElementById('audio-break');
const audioRegular = document.getElementById('audio-regular');
audioRegular.volume = document.getElementById('volume-controller').value;
audioBreak.volume = document.getElementById('volume-controller').value;

let codigo = null;
let currentBPM = 60;
let isPlaying = false;
let isVisible = false;
let timer = null;
let timing = 0;
let loopBreak = 4;


/* CARRECA A TELA INICIAL COM AS MUSICAS */
function load() {
    musicas.data.sort((a, b) => a.nome < b.nome ? -1 : 1);
    codigo = '';

    for (let i = 0; i < musicas.data.length; i++) {
        codigo += `<div class="music-box" onclick='showTab(${i})'>
                        <div class="music-top">
                            <img src="${musicas.data[i].imagem}" alt="img">
                            <div class="music-text">
                                <p class="music-name">${musicas.data[i].nome}</p>
                                <p class="music-author">${musicas.data[i].autor}</p>
                            </div>
                        </div>
                    </div>`;


        if (musicas.data[i].tab == '') {
            console.log("no tabs: " + musicas.data[i].nome)
        }
    }

    document.getElementById('grid').innerHTML = codigo;
    document.getElementById('grid').style.display = "grid";
    document.getElementById('grid').style.rowGap = "35px"
}

/* PROCURA VALORES REPETIDOS EM UM ARRAY */
function getRepeats(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

/* REMOVE OS ACENTOS DAS PALAVRAS */
function replaceAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* ABRE A TELA DAS TABLATURAS */
function showTab(id) {
    document.getElementById('cifras').style.display = "flex";
    document.getElementById('blur').style.display = "block";

    if (musicas.data[id].tab != ``){
        document.getElementById('cifras').innerHTML =
        `<div class="info-tabs">
            <p class="tab-title">${musicas.data[id].nome}</p>
            <p class="tab-author">${musicas.data[id].autor}</p>
            <div class="song-buttons">
                <form target="_blank" action="${musicas.data[id].original}"><button class="song-button">Original Song</button></form>
                <form target="_blank" action="${musicas.data[id].guide}"><button class="song-button">Guide Song</button></form>
            </div>
        </div>

        <div id="vl"></div>

        <div class="tabs">
            <pre>${musicas.data[id].tab}</pre>
        </div>
        <button class="close" onclick='closeTab()'></button>`;
    } else {
        document.getElementById('cifras').innerHTML =
        `<div class="info-tabs">
            <p class="tab-title">${musicas.data[id].nome}</p>
            <p class="tab-author">${musicas.data[id].autor}</p>
            <div class="song-buttons">
                <form target="_blank" action="${musicas.data[id].original}"><button class="song-button">Original Song</button></form>
                <form target="_blank" action="${musicas.data[id].guide}"><button class="song-button">Guide Song</button></form>
            </div>
        </div>

        <div id="vl"></div>

        <div class="tabs">
            <p id="no-tabs">No tabs for this song...</p>
        </div>
        <button class="close" onclick='closeTab()'></button>`;
    }   
}

/* FECHA A TABLATURA */
function closeTab() {
    document.getElementById('cifras').style.display = "none";
    document.getElementById('blur').style.display = "none";
}

/* FECHA A TABLATURA QUANDO APERTA ESC */
document.addEventListener('keydown', function () {

    var x = event.keyCode || event.which;
    var cifras = document.getElementById('cifras').style.display;

    if (x == 27 & cifras == 'flex') {
        document.getElementById('cifras').style.display = "none";
        document.getElementById('blur').style.display = "none";
    } else if (x == 27 & isVisible){
        displayMetronomo()
    }
});

/* CARREGA A TELA COM OS ARTISTAS */
function sendArtists() {
    document.getElementById('grid').style.display = "flex";
    document.getElementById('grid').style.flexDirection = "column";
    document.getElementById('grid').style.rowGap = "10px"
    musicas.data.sort((a, b) => a.autor < b.autor ? -1 : 1);
    var autores = new Array(musicas.data.length); 
    codigo = '';

    for (let i = 0; i < musicas.data.length; i++) {
        autores[i] = musicas.data[i].autor;
    }

    for (let i = 0; i < musicas.data.length; i++) {
        if (codigo.includes(musicas.data[i].autor) == false) {
            codigo += `<div class="author-box" onclick="sendArtistSongs(${i})">
                            <img src="${musicas.data[i].imgArtist}" alt="img">
                            <p class="author-name">${musicas.data[i].autor}</p>
                            <p class="song-quantity">${getRepeats(autores, musicas.data[i].autor)} songs</p>
                        </div>`;
        }
    }
    document.getElementById('grid').innerHTML = codigo;
};

/* MANDA AS MUSICAS QUANDO CLICA NO ARTISTA */
function sendArtistSongs(id) {
    codigo = '';

    for (let i = 0; i < musicas.data.length; i++) {
        if (musicas.data[id].autor == musicas.data[i].autor) {
            codigo += `<div class="music-box" onclick='showTab(${i})'>
            <div class="music-top">
                <img src="${musicas.data[i].imagem}" alt="img">
                <div class="music-text">
                    <p class="music-name">${musicas.data[i].nome}</p>
                    <p class="music-author">${musicas.data[i].autor}</p>
                </div>
            </div>
        </div>`;
        }
    }
    document.getElementById('grid').innerHTML = codigo;
    document.getElementById('grid').style.display = "grid";
    document.getElementById('grid').style.rowGap = "35px"
};

/* TOCA O SOM DO METRONOMO */
function tick() {
    if (timing == 0) {
        audioBreak.currentTime = 0;
        audioBreak.play();
    } else if (timing >= loopBreak) {
        audioBreak.currentTime = 0;
        audioBreak.play();
        timing = 0;
    } else {
        audioRegular.currentTime = 0;
        audioRegular.play();
    }

    timing += 1;
};

/* FUNCIONALIDADE DA RANGE DE BPM */
document.getElementById('bpm').addEventListener('input', function () {
    document.getElementById('metronome-text').innerHTML = this.value;
    currentBPM = parseInt(this.value);
    if (isPlaying) {
        clearInterval(timer);
        timer = setInterval(tick, (60 * 1000) / currentBPM);
    }
});

/* PLAY E PAUSE NO METRONOMO */
document.getElementById('metronome-play').addEventListener('click', function () {
    timing = 0;

    if (isPlaying) {
        clearInterval(timer);
        document.getElementById('play-img').src = 'icons/play.png';
    } else {
        tick();
        timer = setInterval(tick, (60 * 1000) / currentBPM);
        document.getElementById('play-img').src = 'icons/pause.png';
    }
    isPlaying = !isPlaying;
});

/* MUDA O SOM DO METRONOMO */
document.getElementById('select-sons').addEventListener('change', function () {
    if (this.value == 'audio-a') {
        audioRegular.src = 'audios/sound-A-regular.wav';
        audioBreak.src = 'audios/sound-A-break.wav';
    } else if (this.value == 'audio-b') {
        audioRegular.src = 'audios/sound-B-regular.wav';
        audioBreak.src = 'audios/sound-B-break.wav';
    } else {
        audioRegular.src = 'audios/sound-C-regular.wav';
        audioBreak.src = 'audios/sound-C-break.wav';
    }
});

/* MUDA O VOLUME DO METRONOMO */
document.getElementById('volume-controller').addEventListener('input', function () {
    audioRegular.volume = this.value;
    audioBreak.volume = this.value;
});

/* ABRE E FECHA O METRONOMO NO BOTAOZINHO */
function displayMetronomo() {
    var metronomo = document.getElementById('metronome-box');
    var botao = document.getElementById('metronome-btn');
    var background = document.getElementById('metronome-bg');

    if (isVisible == false) {
        background.style.cssText = "z-index:2; border-radius:15px; width:250px; height:370px;";
        metronomo.style.cssText = "opacity:1; z-index:2; border-radius:15px; width:250px; height:370px; transition: height 0.15s, width 0.15s, border-radius 0.1s, opacity 0.3s;";

        botao.style.cssText = 'opacity:0'
    } else {
        metronomo.style.cssText = "opacity:0; z-index:1; border-radius:100%; width:100px; height:100px;";
        background.style.cssText = "z-index:1; border-radius:100%; width:100px; height:100px;";

        botao.style.cssText = 'opacity:1';
    }
    isVisible = !isVisible;
}

/* PESQUISA PELA BARRA DA HEADER */
document.getElementById('search-bar').addEventListener('input', function () {
    musicas.data.sort((a, b) => a.nome < b.nome ? -1 : 1);
    document.getElementById('grid').innerHTML = codigo;
    document.getElementById('grid').style.display = "grid";
    document.getElementById('grid').style.rowGap = "35px"

    codigo = '';

    for (let i = 0; i < musicas.data.length; i++) {
        var conditionNome = replaceAccents(musicas.data[i].nome).toLowerCase().includes(this.value.toLowerCase());
        var conditionAutor =  replaceAccents(musicas.data[i].autor).toLowerCase().includes(this.value.toLowerCase());

        if (conditionNome || conditionAutor) {
            codigo += `<div class="music-box" onclick='showTab(${i})'>
                            <div class="music-top">
                                <img src="${musicas.data[i].imagem}" alt="img">
                                <div class="music-text">
                                    <p class="music-name">${musicas.data[i].nome}</p>
                                    <p class="music-author">${musicas.data[i].autor}</p>
                                </div>
                            </div>
                        </div>`;
        }
    }
    if (codigo == '') {
        codigo = `<p id="no-results">No results for "${this.value}".</p>`
    }

    document.getElementById('grid').innerHTML = codigo;
})

/* ABRE UMA TABLATURA ALEATORIA NA TELA */
document.getElementById('dice-btn').addEventListener('click', function () {
    var random = parseInt(Math.random() * musicas.data.length);
    showTab(random);
})
