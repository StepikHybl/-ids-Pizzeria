const play = document.getElementById("play");
const places = document.getElementById("places");
const order = document.getElementById("order");
const gril = document.getElementById("gril");
const built = document.getElementById("built");
const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");
const objednavky = document.getElementById("objednavky");








play.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'block';
    menu.style.display = 'block';
    document.body.style.background = "url(./res/images/restaurace-bar.jpg)";
}

menu.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'none';
    objednavky.style.display = 'block';
    menu.style.display = 'none'
    menu2.style.display = 'block'
}

menu2.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'block';
    objednavky.style.display = 'none';
    menu.style.display = 'block'
    menu2.style.display = 'none'
}

order.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'block';
    menu.style.display = 'block';
    document.body.style.background = "url(./res/images/restaurace-bar.jpg)";
}

gril.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'block';
    menu.style.display = 'block';
    document.body.style.background = "url(./res/images/pec.jpg)";
}

built.onclick = () => {
    play.style.display = 'none';
    places.style.display = 'block';
    menu.style.display = 'block';
    document.body.style.background = "url(./res/images/stul3.jpeg)";
}

