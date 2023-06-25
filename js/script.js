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


fetch(' https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    var container = document.querySelector('.container');

    json.results.map(function(results){

        container.innerHTML+=`
            <div class= "card" data-id= ` + results.id + `>
            <img src= ` + results.image +`> 
            <strong> ` + results.name + ` </strong><br>
            <span> ` + results.species +` </span><br>
            </div>
            `;

    })
    
    // Adiciona o evento de clique para os cards
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        var id = card.getAttribute('data-id');
        var url = 'inf.html?id=' + id;
        // Redireciona para a nova página com o ID específico
         window.location.href = url
      });
    });

})