'use client';

import { useEffect } from "react";

const RandomJokes = ()=>{

    useEffect(
        ()=>{
            fetchRandomJokes();
        },[]
    );
};

export default RandomJokes;