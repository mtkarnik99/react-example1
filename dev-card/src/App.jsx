// src/App.jsx
import DevCard from './DevCard.jsx';

function App() {
  return (
    <div style={{ display: 'flex', gap: 16, padding: 24 }}>
      <DevCard />
      <DevCard />
    </div>
  );
}

export default App;