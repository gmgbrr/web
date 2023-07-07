
let marca = document.getElementById('marca');
let cambio = document.getElementById('cambio');
let cor = document.getElementById('cor');
let combustivel = document.getElementById('combustivel');
let ano = document.getElementById('ano');
let precoMin = document.getElementById('min');
let precoMax = document.getElementById('max');
let botaoPreco = document.getElementById('botao-preco');

let codigo = '';
let loadNum = 10;
let inHome = true;

let carros = {
    data:[
    {
        nome: 'Honda Fit 2019 1.5 lx 16v',
        marca:'honda',
        preco: 79000,
        ano:'2019',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/honda-fit.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Honda Fit 2019 1.5 lx 16v</p>
                <p style="font-size: 24px;">R$ 79.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">61.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2019</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Barra da Tijuca<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 15:58</p>
                </div>
                <div>
                <img src="icons/heart.png" alt="svg" class="heart" id="heart0" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Captur 1.6 Intense 2019',
        marca:'renault',
        preco: 81790,
        ano:'2019',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/captur.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Captur 1.6 Intense 2019</p>
                <p style="font-size: 24px;">R$ 81.790</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">43.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2019</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Vila Kosmos<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 11:57</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart1" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Onix LT 2013 1.4 flex',
        marca:'ford',
        preco: 48900,
        ano:'2013',
        combustivel:'flex',
        cambio:'manual',
        cor:'vermelho',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/onix.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Onix LT 2013 1.4 flex</p>
                <p style="font-size: 24px;">R$ 48.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">111.111km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2013</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Petrópolis, Corrêas <span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 20:04</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart2" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Jeep compass 2.0 Flex Limited Blindado',
        marca:'jeep',
        preco: 129000,
        ano:'2017',
        combustivel:'flex',
        cambio:'automatico',
        cor:'preto',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/jeep-compass.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Jeep compass 2.0 Flex Limited Blindado</p>
                <p style="font-size: 24px;">R$ 129.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">51.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2017</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Teresópolis, Alto <span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 19:28</p>
                </div>
                <div>
                <img src="icons/heart.png" alt="svg" class="heart" id="heart3" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Amarok CS 2.0 Diesel',
        marca:'volkswagen',
        preco: 85000,
        ano:'2014',
        combustivel:'diesel',
        cambio:'manual',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/amarok.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Amarok CS 2.0 Diesel</p>
                <p style="font-size: 24px;">R$ 85.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">189.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2014</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Diesel</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Niterói, Charitas <span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 18:01</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart4" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Hb20 EVOLUTI 1.0',
        marca:'hyundai',
        preco: 61900,
        ano:'2020',
        combustivel:'flex',
        cambio:'manual',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/hb20.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Hb20 EVOLUTI 1.0</p>
                <p style="font-size: 24px;">R$ 61.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">30km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2020</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">São João de Meriti, Jardim Meriti <span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Ontem, 18:15</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart5" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Peugeot 208 Griffe 1.6 16v',
        marca:'peugeot',
        preco: 85000,
        ano:'2014',
        combustivel:'gasolina',
        cambio:'manual',
        cor:'preto',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/griffe.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Peugeot 208 Griffe 1.6 16v</p>
                <p style="font-size: 24px;">R$ 40.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">110km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2014</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Gasolina</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Campo Grande<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 16:13</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart6" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Volkswagen Nivus 2023 1.0 200 tsi',
        marca:'volkswagen',
        preco: 118900,
        ano:'2023',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/nivus.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Volkswagen Nivus 2023 1.0 200 tsi</p>
                <p style="font-size: 24px;">R$ 118.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">0km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2023</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Nova Friburgo, Prado<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 12:14</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart7" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'GOL 1.0 2011 GNV',
        marca:'volkswagen',
        preco: 19900,
        ano:'2011',
        combustivel:'alcool',
        cambio:'manual',
        cor:'cinza',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/gol-2011.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">GOL 1.0 2011 GNV</p>
                <p style="font-size: 24px;">R$ 19.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">166.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2011</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Álcool</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Bonsucesso<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 10:44</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart8" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Hyundai Hr Turbo Diesel 2017 !!',
        marca:'hyundai',
        preco: 113900,
        ano:'2017',
        combustivel:'diesel',
        cambio:'manual',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/hr-turbo.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Hyundai Hr Turbo Diesel 2017 !!</p>
                <p style="font-size: 24px;">R$ 113.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">86.500km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2017</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Diesel</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Macaé, Praia Campista<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:26</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart9" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'JEEP COMPASS TD350 4X4 DIESEL',
        marca:'jeep',
        preco: 210000,
        ano:'2022',
        combustivel:'diesel',
        cambio:'automatico',
        cor:'branco',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/compass.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">JEEP COMPASS TD350 4X4 DIESEL</p>
                <p style="font-size: 24px;">R$ 210.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">46.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2022</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Diesel</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Niterói, Icaraí<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:08</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart10" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'PALIO SPORTING 1.6 FLEX 2016 TETO SOLAR',
        marca:'fiat',
        preco: 51900,
        ano:'2016',
        combustivel:'flex',
        cambio:'manual',
        cor:'branco',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/palio-sporting.jpg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">PALIO SPORTING 1.6 FLEX 2016 TETO SOLAR</p>
                <p style="font-size: 24px;">R$ 51.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">88.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2016</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Barra Mansa, Centro<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:07</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart11" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'VW T-CROSS 1.0 TSI FLEX 2020',
        marca:'volkswagen',
        preco: 88000,
        ano:'2020',
        combustivel:'flex',
        cambio:'manual',
        cor:'cinza',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/t-cross.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">VW T-CROSS 1.0 TSI FLEX 2020</p>
                <p style="font-size: 24px;">R$ 88.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">77.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2020</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Barra da Tijuca<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:08</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart12" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Idea Adventure 2008 flex 1.8 completa',
        marca:'fiat',
        preco: 22900,
        ano:'2008',
        combustivel:'flex',
        cambio:'manual',
        cor:'preto',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/idea.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Idea Adventure 2008 flex 1.8 completa</p>
                <p style="font-size: 24px;">R$ 22.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">93.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2008</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Irajá<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:07</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart13" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'FORD ECOSPORT FREESTYLE 1.6 2015',
        marca:'ford',
        preco: 52900,
        ano:'2015',
        combustivel:'flex',
        cambio:'manual',
        cor:'branco',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/ecosport.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">FORD ECOSPORT FREESTYLE 1.6 2015</p>
                <p style="font-size: 24px;">R$ 52.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">75.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2015</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Jardim Sulacap<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:06</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart14" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Sandero 1.0 Flex 2018.',
        marca:'renault',
        preco: 55990,
        ano:'2018',
        combustivel:'flex',
        cambio:'manual',
        cor:'branco',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/sandero.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Sandero 1.0 Flex 2018.</p>
                <p style="font-size: 24px;">R$ 55.990</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">55.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2018</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Jardim Carioca<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 08:06</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart15" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Vendo HB20 confort plus',
        marca:'hyundai',
        preco: 30000,
        ano:'2017',
        combustivel:'flex',
        cambio:'manual',
        cor:'cinza',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/hb20-2.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Vendo HB20 confort plus</p>
                <p style="font-size: 24px;">R$ 30.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">50.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2017</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Hermes<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:05</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart16" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Honda Civic Touring',
        marca:'honda',
        preco: 129900,
        ano:'2018',
        combustivel:'gasolina',
        cambio:'automatico',
        cor:'branco',
        codigo: `<div class="car-box">
        <div class="car-img">
            <img src="images/civic.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Honda Civic Touring</p>
                <p style="font-size: 24px;">R$ 129.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">85.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2018</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Gasolina</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Campo dos Goytacazes, Centro<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 12:25</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart17" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'RENAULT OROCH 1.3 TCE FLEX OUTSIDER X-TRONIC',
        marca:'renault',
        preco: 128990,
        ano:'2023',
        combustivel:'flex',
        cambio:'automatico',
        cor:'vermelho',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/oroch.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">RENAULT OROCH 1.3 TCE FLEX OUTSIDER X-TRONIC</p>
                <p style="font-size: 24px;">R$ 128.990</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">0km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2023</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Tijuca<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 10:02</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart18" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'FIAT/UNO MILLE FIRE 2002',
        marca:'fiat',
        preco: 9800,
        ano:'2002',
        combustivel:'gasolina',
        cambio:'manual',
        cor:'cinza',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/uno.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">FIAT/UNO MILLE FIRE 2002</p>
                <p style="font-size: 24px;">R$ 9.800</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">221.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2002</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Gasolina</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Duque de Caxias, Parque Vitória<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 10:14</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart19" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Jeep Renegade Longitude 20/20 Completo',
        marca:'jeep',
        preco: 92250,
        ano:'2020',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/renegade.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Jeep Renegade Longitude 20/20 Completo</p>
                <p style="font-size: 24px;">R$ 92.250</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">34.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2020</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio das Ostras, Costa Azul<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 09:58</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart20" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Volkswagen Golf 1.4 TSi BlueMotion Technology',
        marca:'volkswagen',
        preco: 82000,
        ano:'2015',
        combustivel:'gasolina',
        cambio:'manual',
        cor:'cinza',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/golf.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Volkswagen Golf 1.4 TSi BlueMotion Technology</p>
                <p style="font-size: 24px;">R$ 82.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">95.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2015</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Gasolina</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;"> Rio de Janeiro, Jacarepaguá<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 10:28</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart21" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Jeep Compass 2019 2.0 16v flex longitude',
        marca:'jeep',
        preco: 109000,
        ano:'2019',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/compass-3.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Jeep Compass 2019 2.0 16v flex longitude</p>
                <p style="font-size: 24px;">R$ 109.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">54.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2019</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Barra da Tijuca<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span>Hoje, 13:20</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart22" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Ford Ka Sel 1.5 Mecânico Completo 2018',
        marca:'ford',
        preco: 50900,
        ano:'2018',
        combustivel:'flex',
        cambio:'manual',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/ford-ka.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Ford Ka Sel 1.5 Mecânico Completo 2018</p>
                <p style="font-size: 24px;">R$ 50.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">80.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2018</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Pechincha<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span>Hoje, 12:55</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart23" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Volkswagen Polo 2019 1.0 200tsi highline',
        marca:'volkswagen',
        preco: 79000,
        ano:'2019',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/polo.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Volkswagen Polo 2019 1.0 200tsi highline</p>
                <p style="font-size: 24px;">R$ 79.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">85.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2019</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Recreio dos Bandeirantes<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 13:35</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart24" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`, 
    },
    {
        nome: 'Volkswagen Fusca 1970 1.3 8v gasolina 2p manual',
        marca:'volkswagen',
        preco: 39500,
        ano:'1970',
        combustivel:'gasolina',
        cambio:'manual',
        cor:'cinza',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/fusca.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Volkswagen Fusca 1970 1.3 8v gasolina 2p manual</p>
                <p style="font-size: 24px;">R$ 39.500</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">107.684km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">1970</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Gasolina</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Manual</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Pechincha<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span>Hoje, 13:26</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart25" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Jetta 250TSI Blindado',
        marca:'volkswagen',
        preco: 140000,
        ano:'2019',
        combustivel:'flex',
        cambio:'automatico',
        cor:'preto',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/jetta.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Jetta 250TSI Blindado</p>
                <p style="font-size: 24px;">R$ 140.000</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">60.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2019</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Niterói, Santa Rosa<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 18:01</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart26" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },
    {
        nome: 'Honda Civic Lx 2.0',
        marca:'honda',
        preco: 100900,
        ano:'2020',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/civic-2.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">Honda Civic Lx 2.0</p>
                <p style="font-size: 24px;">R$ 100.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">42.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2020</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">Rio de Janeiro, Taquara<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span>Hoje, 18:00</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart27" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,        
    },
    {
        nome: 'HB20 2022',
        marca:'hyundai',
        preco: 57900,
        ano:'2022',
        combustivel:'flex',
        cambio:'automatico',
        cor:'branco',
        codigo:`<div class="car-box">
        <div class="car-img">
            <img src="images/hb20-3.jpeg" alt="img" class="car-img">
        </div>

        <div class="car-desc">
            <div class="desc-line-1">
                <p style="font-size:18px;">HB20 2022</p>
                <p style="font-size: 24px;">R$ 57.900</p>
            </div>

            <div class="desc-line-2">
                <div class="first">
                    <img src="icons/speedometer-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">1.000km</p>
                </div>
                <div class="second">
                    <img src="icons/calendar-days-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">2022</p>
                </div>
                <div class="third">
                    <img src="icons/fuel-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Flex</p>
                </div>
                <div class="forth">
                    <img src="icons/gear-svgrepo-com.svg" alt="svg" class="desc-icon">
                    <p class="desc-text">Automático</p>
                </div>
            </div>

            <div class="desc-line-3">
                <div style="display: flex;">
                    <img src="icons/map-pin-svgrepo-com.svg" alt="svg" style="width: 15px; margin-right: 4px; margin-bottom: 5px;">
                    <p style="font-size: 12px;">São João de Meriti, Jardim José Bonifácio<span style="margin:0 7px;font-weight: bolder; font-size: 14px;">|</span> Hoje, 17:58</p>
                </div>
                <div>
                    <img src="icons/heart.png" alt="svg" class="heart" id="heart28" onclick="heartClick(this.id)">
                </div>
            </div>
        </div>
        </div>`,
    },

    ]
};

let heartState = new Array(carros.data.length).fill(false);


/* function scrollFix(){
    var scrollHeight = document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var hasVerticalScrollbar = scrollHeight > clientHeight;

    if (hasVerticalScrollbar === false) {
        document.getElementById('myBody').style.paddingRight = "15px"
        document.getElementById('myHeader').style.paddingRight = "265px"
    } else {
        document.getElementById('myBody').style.paddingRight = "0px"
        document.getElementById('myHeader').style.paddingRight = "250px"
    }

} */

function load() {
    codigo = '';
    if (inHome === true){
        for(let i = 0; i < loadNum; i++) {
            codigo += carros.data[i].codigo;
        }
        document.getElementById('cars-grid').innerHTML = codigo;
        loadNum += 10; 

        if (loadNum > carros.data.length){
            loadNum = carros.data.length;
        }
    }
    sendBottom()   
};

$(window).scroll(function() {   
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        load()
    }
});

function filtrarMarca() {
    inHome = false;
    codigo = '';

    for (let i = 0; i < carros.data.length; i++) {
        if (marca.value === carros.data[i].marca) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    document.getElementById('cambio').selectedIndex = 0;
    document.getElementById('cor').selectedIndex = 0;
    document.getElementById('combustivel').selectedIndex = 0;
    document.getElementById('ano').selectedIndex = 0;
    scrollFix()
    sendBottom()
};

function filtrarCambio() {
    inHome = false;
    codigo = '';
    for (let i = 0; i < carros.data.length; i++) {
        if (cambio.value === carros.data[i].cambio) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    document.getElementById('marca').selectedIndex = 0;
    document.getElementById('cor').selectedIndex = 0;
    document.getElementById('combustivel').selectedIndex = 0;
    document.getElementById('ano').selectedIndex = 0;
    scrollFix()
};

function filtrarCor() {
    inHome = false;
    codigo = '';
    for (let i = 0; i < carros.data.length; i++) {
        if (cor.value === carros.data[i].cor) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    document.getElementById('cambio').selectedIndex = 0;
    document.getElementById('marca').selectedIndex = 0;
    document.getElementById('combustivel').selectedIndex = 0;
    document.getElementById('ano').selectedIndex = 0;
    scrollFix()
};

function filtrarCombustivel() {
    inHome = false;
    codigo = '';

    for (let i = 0; i < carros.data.length; i++) {
        if (combustivel.value === carros.data[i].combustivel) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    document.getElementById('cambio').selectedIndex = 0;
    document.getElementById('cor').selectedIndex = 0;
    document.getElementById('marca').selectedIndex = 0;
    document.getElementById('ano').selectedIndex = 0;
    scrollFix()
};

function filtrarAno() {
    inHome = false;
    codigo = '';
    for (let i = 0; i < carros.data.length; i++) {
        if (ano.value === carros.data[i].ano) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    document.getElementById('cambio').selectedIndex = 0;
    document.getElementById('cor').selectedIndex = 0;
    document.getElementById('marca').selectedIndex = 0;
    document.getElementById('combustivel').selectedIndex = 0;
    scrollFix()
};

function filtrarPreco() {
    inHome = false;
    codigo = '';

    console.log("min: " + precoMin.value);
    console.log("max: " + precoMax.value);

    let min = Number(precoMin.value);
    let minDefault = 110000;
    let max = Number(precoMax.value);
    let maxDefault = 110000;

    if (min != minDefault && max != maxDefault && min >= max) {
        alert('Valor inválido.');
        return;
    } else if (min === minDefault && max === maxDefault) {
        return;
    }

    if (min != minDefault && max === maxDefault) {
        for (let i = 0; i < carros.data.length; i++) {
            if (min <= carros.data[i].preco) {
                codigo += carros.data[i].codigo;
            }
        }
        document.getElementById('cars-grid').innerHTML = codigo;
    } else if (min === minDefault && max != maxDefault) {
        for (let i = 0; i < carros.data.length; i++) {
            if (max >= carros.data[i].preco) {
                codigo += carros.data[i].codigo;
            }
        }
        document.getElementById('cars-grid').innerHTML = codigo;
    } else if (min != minDefault && max != maxDefault) {
        for (let i = 0; i < carros.data.length; i++) {
            if (max >= carros.data[i].preco && min <= carros.data[i].preco) {
                codigo += carros.data[i].codigo;
            }
        }
        document.getElementById('cars-grid').innerHTML = codigo;
    }

    if (codigo === ''){
        document.getElementById('cars-grid').innerHTML = '<div id="filtro-vazio"><p style="font-size: 18px">Nenhum resultado encontrado...</p></div>';
    } 
    scrollFix()
};

function heartClick(heartId) {
    let heartNumber = Number(heartId.slice(-1))

    if (heartState[heartNumber] === false) {
        document.getElementById(heartId).src = "icons/heart-preenchido.png";
        heartState[heartNumber] = true;
    } else {
        document.getElementById(heartId).src = "icons/heart.png";
        heartState[heartNumber] = false;
    }
};

function filtroPesquisa() {
    inHome = false;
    codigo = '';

    let pesquisa = document.getElementById('search-bar')
    
    for (let i = 0; i < carros.data.length; i++) {
        if (carros.data[i].nome.toUpperCase().includes(pesquisa.value.toUpperCase())) {
            codigo += carros.data[i].codigo;
        }
    }
    document.getElementById('cars-grid').innerHTML = codigo;

    if (codigo === ''){
        document.getElementById('cars-grid').innerHTML = '<div id="filtro-vazio"><p style="font-size: 18px">Nenhum resultado encontrado...</p></div>';
    } 
    scrollFix()
}

function sendBottom() {
    if (inHome === false) {
        document.getElementById('page-bottom').style.height = "200px";
        document.getElementById('page-bottom').style.opacity = "1";
    }
    if (document.body.scrollHeight > 6900) {
        document.getElementById('page-bottom').style.height = "200px";
        document.getElementById('page-bottom').style.opacity = "1";
    }
}