// Dati dei giocatori
const players = {
    Gumiero: { nome: "Gumiero", cognome: "Gumi", età: 25, ruolo: "Palleggiatore" },
    Jabir: { nome: "Jabir", cognome: "Ahmed", età: 22, ruolo: "Schiacciatore" },
    Ricali: { nome: "Ricali", cognome: "Rossi", età: 26, ruolo: "Libero" },
    Fontana: { nome: "Fontana", cognome: "Gino", età: 24, ruolo: "Centrale" },
    Locatelli: { nome: "Locatelli", cognome: "Leo", età: 23, ruolo: "Opposto" },
    Bodlli: { nome: "Bodlli", cognome: "Mattia", età: 28, ruolo: "Schiacciatore" },
    Mascheroni: { nome: "Mascheroni", cognome: "Luca", età: 29, ruolo: "Centrale" },
    Umer: { nome: "Umer", cognome: "Khan", età: 21, ruolo: "Libero" },
    Salvo: { nome: "Salvo", cognome: "Gianni", età: 27, ruolo: "Palleggiatore" },
    Palazzo: { nome: "Palazzo", cognome: "Marco", età: 24, ruolo: "Schiacciatore" },
    Barindelli: { nome: "Barindelli", cognome: "Andrea", età: 23, ruolo: "Centrale" },
    Narciso: { nome: "Narciso", cognome: "Filippo", età: 26, ruolo: "Libero" },
    Ghisolfi: { nome: "Ghisolfi", cognome: "Franco", età: 27, ruolo: "Opposto" },
    Tonet: { nome: "Tonet", cognome: "Giovanni", età: 24, ruolo: "Schiacciatore" },
    Bramani: { nome: "Bramani", cognome: "Stefano", età: 22, ruolo: "Centrale" },
    Zorzan: { nome: "Zorzan", cognome: "Luigi", età: 25, ruolo: "Libero" },
    Yachou: { nome: "Yachou", cognome: "Omar", età: 28, ruolo: "Opposto" }
};

// Funzione per mostrare i dettagli del giocatore
function showPlayerDetails(playerName) {
    const player = players[playerName];
    document.getElementById("playerName").textContent = `${player.nome} ${player.cognome}`;
    document.getElementById("playerDetails").innerHTML = `
        <strong>Età:</strong> ${player.età} <br>
        <strong>Ruolo:</strong> ${player.ruolo}
    `;
    document.getElementById("playerModal").style.display = "block";
}

// Funzione per chiudere la modale
function closeModal() {
    document.getElementById("playerModal").style.display = "none";
}
