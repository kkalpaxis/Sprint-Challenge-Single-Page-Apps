import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const CharacterList = props => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = () => {
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    getCharacters()
  }, []);

  return (
    <div className='character-list grid-view'>
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </div>
  );
};

function CharacterDetails ({ character }) {
  const { name, status, species } = character;
  return (
    <NavLink to={`/character/${id}`}>
    <div className="character-card">
      <h2>{name}</h2>
      <div className="character-status">
        Status: <h5>{status}</h5>
      </div>
      <div className="character-species">
        Species: <h5>{species}</h5>
      </div>
    </div>
    </NavLink>
  );
}

export default CharacterList;
