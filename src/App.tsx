import React from 'react';
import { useEffectOnce } from './challenges/useEffectOnce/challenge';

function App() {
    useEffectOnce(() => {
        console.log('Effect ran once on initial render');
        return () => {
            console.log('Cleanup ran');
        };
    });

    return (
        <div style={{ padding: '20px' }}>
            <h1>Coding Challenges</h1>
            <p>Open the console to see if the effect runs only once.</p>
        </div>
    );
}

export default App;
