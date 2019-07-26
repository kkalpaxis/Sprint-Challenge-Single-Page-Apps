import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Episode = (props) => {
  console.log('props', props)
  const [episode, setEpisode] = useState();
  const id = props.match.params.id;
 
  useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/episodes/${id}`)
        .then(response => {
          setEpisode(response.data);
        })
        .catch(error => {
          console.error(error);
        });
 
  }, [id]);

   if (!episode) {
    return <div>Loading episode information...</div>;
  }

  const { name, air_date, episode } = episode;
  return (
    <div>
        <div className="episode-card">
            <h2>{name}</h2>
        </div>
        <div className="episode-airDate">
          Air Date: <h5>{air_date}</h5>
        </div>
        <div className="episode-number">
          Episode: <h5>{episode}</h5>
        </div>
    </div>
  );
}

export default Episode;