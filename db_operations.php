<?php
// db_operations.php
$servername = "localhost";
$username = "username"; // cambia con il tuo
$password = "password"; // cambia con il tuo
$dbname = "fantavolley_db";

// Crea la connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla la connessione
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Funzione per inserire una nuova partita
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['gumi_score']) && isset($_POST['salvo_score'])) {
    $gumi_score = $_POST['gumi_score'];
    $salvo_score = $_POST['salvo_score'];
    $gumi_absent = $_POST['gumi_absent'];
    $salvo_absent = $_POST['salvo_absent'];

    $stmt = $conn->prepare("INSERT INTO matches (gumi_score, salvo_score, gumi_absent, salvo_absent) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("iiii", $gumi_score, $salvo_score, $gumi_absent, $salvo_absent);
    $stmt->execute();
    $stmt->close();
    echo "Partita salvata con successo!";
}

// Funzione per recuperare tutte le partite
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM matches";
    $result = $conn->query($sql);
    $matches = [];
    while ($row = $result->fetch_assoc()) {
        $matches[] = $row;
    }
    echo json_encode($matches);
}

$conn->close();
?>
