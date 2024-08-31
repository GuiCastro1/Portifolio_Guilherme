const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function Carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`
}
setInterval(Carrossel, 2000)


const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");

let idx2 = 0;

function Carrossel2() {
    idx2++;
    if (idx2 > img2.length - 1) {
        idx2 = 0;
    }

    imgs2.style.transform = `translateX(${-idx2 * 200}px)`;
}
setInterval(Carrossel2, 2000);
