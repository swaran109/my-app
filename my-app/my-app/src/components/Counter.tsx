import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: `rgba(0, 150, 255, ${count * 0.1})` }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
