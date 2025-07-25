'use client';

import { useEffect, useState } from "react";

const RandomJokes = () => {
    const [showJokes, setShowJokes] = useState(true);
    const [randomJokes, setRandomJokes] = useState({});

    const URL = 'https://official-joke-api.appspot.com/random_joke';
    const fetchRandomJokes = async () => {
        const res = await fetch(URL);
        const data = await res.json();

        console.log(data);

        setRandomJokes(data);
    }
    useEffect(
        () => {
            fetchRandomJokes();
        }, []
    );

    return (
        <>
            <p>{randomJokes.setup}</p>
            
            {
                showJokes ? (
                    <button onClick={()=>setShowJokes(false)}>Reveal</button>
                ) : (
                    <div><h2>{randomJokes.punchline}</h2>
                    <button onClick={()=>setShowJokes(true)}>Hide Punchline</button></div>
                )
            }
        </>
    );
};

export default RandomJokes;