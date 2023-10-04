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