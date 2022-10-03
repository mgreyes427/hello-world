import React, { useState, useEffect } from 'react';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

import { getRandomJoke } from '../../services/axiosService';

const likeStyle = {
    color: 'green',
}

const dislikeStyle = {
    color: 'red',
}


const ChuckNorrisJokes = () => {

    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function getJoke() {
            getRandomJoke()
                .then((response) => {
                    if (response.status === 200){
                        setJoke(response.data.value);
                    }
                })
                .catch((error) => {
                    alert(`Something went wrong: ${error}`);
                });
    }

    const likeJoke = () => setLikes(likes + 1);
    const dislikeJoke = () => setDislikes(dislikes + 1);

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <div>
                <p>{ joke }</p>
                <button onClick={ getJoke }>Get New Joke</button>
            </div>
            <div>
                <span style={ likeStyle }>
                    <ThumbUp onClick={ likeJoke } />
                    <span> { likes } </span>
                </span>
                    
                <span style={ dislikeStyle }>
                    <ThumbDown onClick={ dislikeJoke } /> 
                    <span> { dislikes } </span>
                </span>
            </div>
        </div>
    );
}

export default ChuckNorrisJokes;
