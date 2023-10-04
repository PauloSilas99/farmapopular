const fundoamarelo = document.querySelector('.fundoamarelo')
let pressed=false
let startX=0

fundoamarelo.addEventListener('mousedown',function(e){
    pressed = true
    startX = e.clientX
    this.style.cursor='grabbing'
});

fundoamarelo.addEventListener('mouseleave',function(e){
    pressed = false
});

window.addEventListener('mouseup',function(e){
    pressed = false
    wrapper.style.cursor='grab'
});

fundoamarelo.addEventListener('mousemove',function(e){
    if(!pressed){
        return
    }
    this.scrollLeft += startX - e.clientX
});

window.sr=ScrollReveal({ reset: true});
sr.reveal('.float-left',{rotate:{x:100,y:20,z:50},duration:1850});

sr.reveal('.direita',{rotate:{x:200,y:0,z:0},duration:2500});

sr.reveal('.esquerda',{rotate:{x:100,y:20,z:50},duration:2000});