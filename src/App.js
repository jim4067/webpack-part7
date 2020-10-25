import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const useNotes = (url) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setNotes(response.data)
            })
    }, [url]);

    return notes;
}

const App = () => {
    const [counter, setCounter] = useState(0);
    const [values, setValues] = useState([]);
    const url = 'https://blooming-atoll-75500.herokuapp.com/api/notes';
    const notes = useNotes(url);

    const handleClick = () => {
        setCounter(counter + 1);
        setValues(values.concat(counter))
    }

    return (
        <div className='container'>
            Hi there. Webpack counts {counter} clicks
            <button onClick={handleClick} >click here</button>
            <div>hello there! There are {notes.length} on the server</div>
        </div>
    );
}

export default App;