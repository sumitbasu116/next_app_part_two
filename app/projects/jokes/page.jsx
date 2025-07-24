'use client';

import { useEffect, useState } from "react";

const RandomJokes = ()=>{
    
    const [randomJokes,setRandomJokes] = useState({});

    const URL = 'https://official-joke-api.appspot.com/random_joke';
    const fetchRandomJokes = async ()=>{
        const res = await fetch(URL);
        const data = await res.json();

        console.log(data);
        
        setRandomJokes(data);
    }
    useEffect(
        ()=>{
            fetchRandomJokes();
        },[]
    );
};

export default RandomJokes;