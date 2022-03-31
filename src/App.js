
import React from 'react';
import './App.css';

function App() {
  const cacheData = (cacheName, url, response)=>{
      const data = new Response(JSON.stringify(response));

      if('caches' in window){
        caches.open(cacheName).then((cache) => {
          cache.put(url, data);
          alert("Data added into cache...!")
        });
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>Store data into cache.</h4>
        <button 
          onClick={()=>cacheData('Mycache', 'http://localhost:3000', "This is my cache")}>
          Add cache
        </button>
      </header>
    </div>
  );
}

export default App;
