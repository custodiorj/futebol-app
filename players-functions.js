const getSavedPlayers = () => {

    const playersJSON = localStorage.getItem('players');
    console.log('playersJSON:', JSON.parse(playersJSON))
    if (playersJSON !== null) {
        return JSON.parse(playersJSON);
    } else {
        return [];
    }


}

const savePlayers = players => {
    localStorage.setItem('players', JSON.stringify(players));
}


const deletePlayer = id => {
    const playerId = players.findIndex( player => {
        return player.id === id;
    })

    if (playerId > -1) {
        players.splice(playerId, 1);
    }
}

const renderPlayers = players => {
    document.getElementById('playerInf').innerHTML = '';
    
   
    players.forEach( player => {
        document.getElementById('playerInf').appendChild(generatePlayersDOM(player));
    })
}

const generatePlayersDOM = player => {
    const playerSection = document.createElement('div');
    const playerInformation = document.createElement('p');
    const deleteButton = document.createElement('i');
    const playerNumber = document.createElement('div');
    const playerPosition = document.createElement('div');
    const TRASH ='fa-trash-alt';

    const getId = id => {
        const playerId = players.findIndex( player => {
            return player.id === id;
        })
        return playerId;
    }

    playerSection.appendChild(playerNumber);
    playerSection.appendChild(playerPosition);

    deleteButton.setAttribute('id', 'deletar');
    playerSection.appendChild(deleteButton);

    playerInformation.setAttribute("for", getId(player.id));
    playerSection.appendChild(playerInformation);


    if(playerNumber.classList) {
        playerNumber.classList.add('player-number');
    } else {
        playerNumber.className += 'player-number';
    }

    if(playerPosition.classList) {
        playerPosition.classList.add('player-position');
    } else {
        playerPosition.className += 'player-position'
    }

    if(playerSection.classList) {
        playerSection.classList.add('inside-container');
    } else {
        playerSection.className += 'inside-container';
    }

    if(deleteButton.classList) {
        deleteButton.classList.add('far', TRASH);
    } else {
        deleteButton.className += 'far', TRASH;
    }

    playerNumber.textContent = player.number;
    playerSection.appendChild(playerNumber);

    playerInformation.textContent = player.text;
    playerSection.appendChild(playerInformation);

    playerPosition.textContent = player.pos;
    playerSection.appendChild(playerPosition);

    playerSection.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        deletePlayer(player.id);
        savePlayers(players);
        renderPlayers(players);
    })

    return playerSection
}