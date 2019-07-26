import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeList = props => {
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    const getEpisodes = () => {
      axios
      .get(`https://rickandmortyapi.com/api/episodes/`)
      .then(response => {
        setEpisodes(response.data)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    getEpisodes()
  }, []);

  return (
    <div className='episode-list grid-view'>
      {episodes.map(episode => (
        <EpisodeDetails key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

function EpisodeDetails ({ episode }) {
  const { name, air_date, episode } = character;
  return (
    <div className="episode-card">
      <h2>{name}</h2>
      <div className="episode-airDate">
        Air Date: <h5>{air_date}</h5>
      </div>
      <div className="episode-number">
        Episode: <h5>{episode}</h5>
      </div>
    </div>
  );
}

export default EpisodeList;