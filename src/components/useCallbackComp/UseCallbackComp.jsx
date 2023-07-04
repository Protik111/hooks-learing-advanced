import React, { useCallback, useEffect, useState } from 'react';

const UseCallbackComp = () => {
    const [userInput, setUserInput] = useState('');
    const [num1] = useState(5);
    const [num2] = useState(10);
    const [result, setResult] = useState(0);

    const sum = useCallback(() => num1 + num2, [num1, num2]);

    const buildArr = useCallback(() => [num1, num2], [num1, num2]);
    // const sum = () => num1 + num2;

    useEffect(() => {
        console.log(`The result ${sum()}`);
        setResult(sum()); //printing two times because it is a primitve value
        //setResult(buildArr()) //will be in infinite rendering without useCallback hooks cause it is a non primitive value an array here
    }, [buildArr])

    return (
        <div>
            useCallback Hooks
            <div>
                <label>User Input: {userInput}</label>
                <br></br>
                <input placeholder='User input..' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
            </div>
        </div >
    );
};

export default UseCallbackComp;