import React, { useMemo, useState } from 'react';

 const ExpensiveComponent = ({ a, b }) => {
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return a * b;
  }, [a, b]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
};

const App = () => {
  const [valueA, setValueA] = useState(5);
  const [valueB, setValueB] = useState(10);

  return (
    <div>
      <ExpensiveComponent a={valueA} b={valueB} />
      <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
      <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
    </div>
  );
};


