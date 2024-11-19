// Oggetto con le caratteristiche dei giocatori
const players = {
    Gumi: [
        { nome: "Gumiero", età: 24, ruolo: "Schiacciatore", statistiche: "Punti: 150, Ace: 20" },
        { nome: "Jabir", età: 22, ruolo: "Palleggiatore", statistiche: "Assist: 300, Muri: 10" },
        { nome: "Ricali", età: 25, ruolo: "Centrale", statistiche: "Punti: 120, Muri: 50" },
        { nome: "Fontana", età: 23, ruolo: "Libero", statistiche: "Ricezioni: 400, Errori: 5" },
        { nome: "Locatelli", età: 21, ruolo: "Schiacciatore", statistiche: "Punti: 100, Ace: 15" },
        { nome: "Bodlli", età: 24, ruolo: "Centrale", statistiche: "Punti: 130, Muri: 30" },
        { nome: "Mascheroni", età: 26, ruolo: "Schiacciatore", statistiche: "Punti: 170, Ace: 25" },
        { nome: "Umer", età: 22, ruolo: "Opposto", statistiche: "Punti: 200, Ace: 30" }
    ],
    Salvo: [
        { nome: "Salvo", età: 23, ruolo: "Schiacciatore", statistiche: "Punti: 180, Ace: 20" },
        { nome: "Palazzo", età: 22, ruolo: "Centrale", statistiche: "Punti: 140, Muri: 40" },
        { nome: "Barindelli", età: 24, ruolo: "Palleggiatore", statistiche: "Assist: 280, Ace: 10" },
        { nome: "Narciso", età: 21, ruolo: "Libero", statistiche: "Ricezioni: 420, Errori: 8" },
        { nome: "Ghisolfi", età: 25, ruolo: "Opposto", statistiche: "Punti: 190, Muri: 20" },
        { nome: "Tonet", età: 23, ruolo: "Centrale", statistiche: "Punti: 130, Muri: 35" },
        { nome: "Bramani", età: 26, ruolo: "Schiacciatore", statistiche: "Punti: 200, Ace: 15" },
        { nome: "Zorzan", età: 22, ruolo: "Schiacciatore", statistiche: "Punti: 160, Ace: 18" },
        { nome: "Yachou", età: 20, ruolo: "Centrale", statistiche: "Punti: 120, Muri: 25" }
    ]
};

// Funzione per mostrare i dettagli del giocatore
function showPlayerDetails(playerName) {
    const team = players.Gumi.find(p => p.nome === playerName) ? 'Gumi' : 'Salvo';
    const player = players[team].find(p => p.nome === playerName);

    if (player) {
        const modal = document.getElementById('playerModal');
        document.getElementById('playerName').textContent = `${player.nome} (${team})`;
        document.getElementById('playerDetails').innerHTML = `
            <p><strong>Età:</strong> ${player.età}</p>
            <p><strong>Ruolo:</strong> ${player.ruolo}</p>
            <p><strong>Statistiche:</strong> ${player.statistiche}</p>
        `;
        modal.style.display = 'block';
    }
}

// Funzione per chiudere il modal
function closeModal() {
    document.getElementById('playerModal').style.display = 'none';
}
// Funzione per mostrare i dettagli con opzione di modifica
function showPlayerDetails(playerName) {
    const team = players.Gumi.find(p => p.nome === playerName) ? 'Gumi' : 'Salvo';
    const player = players[team].find(p => p.nome === playerName);

    if (player) {
        const modal = document.getElementById('playerModal');
        document.getElementById('playerName').textContent = `${player.nome} (${team})`;
        document.getElementById('playerDetails').innerHTML = `
            <p><strong>Età:</strong> ${player.età}</p>
            <p><strong>Ruolo:</strong> ${player.ruolo}</p>
            <p><strong>Statistiche:</strong></p>
            <form id="editStatsForm">
                <label>Punti: <input type="number" id="pointsInput" value="${getStatValue(player.statistiche, 'Punti')}" /></label><br>
                <label>Assist: <input type="number" id="assistsInput" value="${getStatValue(player.statistiche, 'Assist')}" /></label><br>
                <label>Muri: <input type="number" id="blocksInput" value="${getStatValue(player.statistiche, 'Muri')}" /></label><br>
                <button type="button" onclick="updatePlayerStats('${playerName}', '${team}')">Aggiorna</button>
            </form>
        `;
        modal.style.display = 'block';
    }
}

// Funzione per estrarre un valore specifico dalle statistiche
function getStatValue(statistiche, statName) {
    const regex = new RegExp(`${statName}:\\s*(\\d+)`);
    const match = regex.exec(statistiche);
    return match ? match[1] : 0;
}

// Funzione per aggiornare le statistiche del giocatore
function updatePlayerStats(playerName, team) {
    const player = players[team].find(p => p.nome === playerName);

    if (player) {
        const points = document.getElementById('pointsInput').value;
        const assists = document.getElementById('assistsInput').value;
        const blocks = document.getElementById('blocksInput').value;

        // Aggiorna le statistiche nel giocatore
        player.statistiche = `Punti: ${points}, Assist: ${assists}, Muri: ${blocks}`;

        alert(`Statistiche aggiornate per ${player.nome}!`);
        closeModal(); // Chiude il modal dopo l'aggiornamento
    }
}
// Caricamento iniziale delle statistiche salvate
window.onload = () => {
    const savedData = JSON.parse(localStorage.getItem('playerStats'));
    if (savedData) {
        players = savedData; // Sovrascrive i dati iniziali
    }
};

// Funzione per aggiornare e salvare i dati
function updatePlayerStats(playerName, team) {
    const player = players[team].find(p => p.nome === playerName);

    if (player) {
        const points = document.getElementById('pointsInput').value;
        const assists = document.getElementById('assistsInput').value;
        const blocks = document.getElementById('blocksInput').value;

        // Aggiorna le statistiche del giocatore
        player.statistiche = `Punti: ${points}, Assist: ${assists}, Muri: ${blocks}`;

        // Salva i dati aggiornati in localStorage
        saveData();

        alert(`Statistiche aggiornate per ${player.nome}!`);
        closeModal(); // Chiude il modal
    }
}

// Funzione per salvare i dati nel localStorage
function saveData() {
    localStorage.setItem('playerStats', JSON.stringify(players));
    console.log("Dati salvati!");
}
