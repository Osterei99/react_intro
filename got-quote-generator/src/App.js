import './App.css';

  // Beispielzitat und Charakter
  const quote = "Der Winter naht.";
  const character = "Ned Stark";
  const isEpic = true;

  // Stilobjekt für das Zitat
  const quoteStyle = {
    fontStyle: 'italic',
    color: '#f89a03ff',
    fontSize: '1.5em',
    marginBottom: '10px',
    borderLeft: '4px solid #f89a03ff',
    paddingLeft: '15px' // Innenabstand links
  };

  // Stilobjekt für den Charakter
  const characterStyle = {
    fontSize: '0.8em',
    color: '#434343ff',
    marginTop: '5px',
    display: 'block' // Block-Element für neue Zeile
  };

// Hauptkomponente der Anwendung
function App() {
  return (
    // Hauptcontainer der App
    <div className="App">
      {/* Kopfbereich der Anwendung */}
      <header className="App-header">
        {/* Titel der Anwendung */}
        <h1>Game of Thrones Zitat-Generator</h1>
        {/* Untertitel/Beschreibung */}
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      {/* Hauptinhaltsbereich */}
      <main>
        <blockquote style={quoteStyle}>
          "{quote}"
        </blockquote>
      </main>
      <footer style={characterStyle}>
        - {character}
         {/* Bedingte Anzeige eines Stern-Emojis, wenn das Zitat "episch" ist */}
         {isEpic && <span style={{ marginLeft : "10px" }}>🌟</span>}
      </footer>
    </div>
  );
}

export default App;
