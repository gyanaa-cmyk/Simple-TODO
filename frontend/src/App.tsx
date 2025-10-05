import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [healthStatus, setHealthStatus] = useState('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => {
        if (res.ok) {
          setHealthStatus('Backend is healthy!');
        } else {
          setHealthStatus('Backend is not healthy.');
        }
      })
      .catch(() => {
        setHealthStatus('Error connecting to backend.');
      });
  }, []);

  return (
    <>
      <h1>Simple Todo</h1>
      <p>Backend status: {healthStatus}</p>
    </>
  );
}

export default App;
