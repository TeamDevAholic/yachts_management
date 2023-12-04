(function(){
    let paginaAtual = 1
    const btnVoltar = document.querySelector('.form .footer .prev')
    const btnproximo = document.querySelector('.form .footer .next')

     function  movepag(){
        btnVoltar.disabled = false
        btnproximo.disabled = false

        if(paginaAtual === 1){
            btnVoltar.disabled = true
        }
        else if(paginaAtual === 4) {
            btnproximo.disabled =true
        }
        document.querySelector('.form .paginacao .activo')
        .classList.remove('activo')

        document.querySelectorAll('.form .paginacao .numero')
        [paginaAtual - 1].classList.add('activo')

        const passoNode =  document.querySelector('.form .passos .passo')

        const width = ((paginaAtual-1) * passoNode.offsetWidth*-1)+"px"
        passoNode.parentNode.style.marginLeft = width
    }
    
    btnVoltar.addEventListener('click', () =>{
        paginaAtual -=1
        movepag()
    })
    btnproximo.addEventListener('click', () =>{
        paginaAtual +=1
        movepag()
    })
})()