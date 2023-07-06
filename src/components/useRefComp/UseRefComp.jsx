import React, { useRef, useState } from 'react';

const UseRefComp = () => {
    const [userInput, setUserInput] = useState('');
    const [seconds, setSeconds] = useState(0);
    const renders = useRef(0);
    const timerId = useRef()

    const handleChange = (e) => {
        setUserInput(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(prev => prev + 1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        if (seconds) {
            renders.current++;
            setSeconds(0);
        }

    }
    return (
        <div>
            <h1>useRef Hooks</h1>
            <h2>Renders time: {renders.current}</h2>
            <p>User Input: {userInput}</p>
            <input value={userInput} onChange={handleChange} placeholder='User input..'></input>

            <br />
            <br />
            <br />
            <section style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>

            <h3>Seconds: {seconds}</h3>

        </div>
    );
};

export default UseRefComp;