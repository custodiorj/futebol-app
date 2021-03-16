
let players = getSavedPlayers();
let id = Math.floor(Math.random() * 10000);

renderPlayers(players);

document.querySelector('#new-player').addEventListener('submit', (event) => {
    event.preventDefault();

    if(event.target.elements.number.value !== '') {
        if(event.target.elements.text.value !== ''){
        players.push({
            id: id,
            number: event.target.elements.number.value,
            text: event.target.elements.text.value,
            pos: event.target.elements.pos.value
        })
        id++
      }
      
    } else {
        return alert("Entre com uma inf")
    }

    
    
    
    savePlayers(players);
    renderPlayers(players);
    
})