import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
  console.log('props', props)
  const [character, setCharacter] = useState();
  const id = props.match.params.id;
 
  useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });
 
  }, [id]);

   if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, status, species } = character;
  return (
    <div>
        <div className="character-card">
            <h2>{name}</h2>
        </div>
        <div className="character-status">
          Status: <h5>{status}</h5>
        </div>
        <div className="character-species">
          Species: <h5>{species}</h5>
        </div>
    </div>
  );
}

export default Character;