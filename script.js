const buts = document.querySelector('.btn1')
const title = document.querySelector('.titulo')
const rick = document.getElementById('rick')
buts.addEventListener("click", function(){
    const main = document.querySelector('main')
    main.style.backgroundImage = "url('/projeto/imgs/desktop-wallpaper-rick-and-morty-throughout-the-incredible-rick-and-mor-papel-de-parede-pc-papel-de-parede-do-notebook-de-computador.jpg')"
    title.style.color = 'white'
    rick.src = 'none' 
})

const buts2 = document.querySelector('.btn2')

buts2.addEventListener("click", function(){
    const main2 = document.querySelector('main')
    main2.style.backgroundImage = "none";
    title.style.color = 'black'
    rick.src = '/projeto/imgs/rick.png'
})