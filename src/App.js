import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas');
    canvas.setHeight(400);
    canvas.setWidth(600);

    const text = new fabric.Text('Demo Logo', {
      left: 100,
      top: 100,
      fontSize: 40,
      fill: '#333',
    });

    canvas.add(text);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Logo Editor Premium</h2>
      <canvas id="canvas" style={{ border: '1px solid #ccc' }}></canvas>
    </div>
  );
}

export default App;
