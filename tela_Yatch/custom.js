const btn = document.querySelector('#btn')
const btnClose = document.querySelector('#btn-clos')
const sideBar = document.querySelector('.sidebar')

btn.addEventListener('click', () =>{
    if (sideBar.classList.contains('sidebar-mod')){
        sideBar.classList.remove('sidebar-mod')
    }
    else{
        sideBar.classList.add('sidebar-mod')
    }
})

btnClose.addEventListener('click', () =>{   
    if (sideBar.classList.contains('open')){
        sideBar.classList.remove('open')
    }
    else{
        sideBar.classList.add('open')
    }
})

btn.addEventListener('click', () =>{
    if (sideBar.classList.contains('open')){
        sideBar.classList.remove('open')
    }
    else{
        sideBar.classList.add('open')
    }
})