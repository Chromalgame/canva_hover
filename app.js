const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const video = document.querySelector('video');

let posX = 100, 
    posY = 0;

canvas.addEventListener('mousemove', e => {
    posX = e.offsetX;
    posY = e.offsetY;
})

function anim(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.save();
    ctx.beginPath();
    ctx.rect(posX - 175,0,350,750);
    ctx.clip();

    ctx.drawImage(video, 0, 0,canvas.width, canvas.height);

    ctx.restore();

    requestAnimationFrame(anim)
}
anim();