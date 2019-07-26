import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Location = (props) => {
  console.log('props', props)
  const [location, setLocation] = useState();
  const id = props.match.params.id;
 
  useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/locations/${id}`)
        .then(response => {
          setLocation(response.data);
        })
        .catch(error => {
          console.error(error);
        });
 
  }, [id]);

   if (!location) {
    return <div>Loading location information...</div>;
  }

  const { name, type, dimension } = location;
  return (
    <div>
        <div className="location-card">
            <h2>{name}</h2>
        </div>
        <div className="location-type">
          Type: <h5>{type}</h5>
        </div>
        <div className="location-dimension">
          Dimension: <h5>{dimension}</h5>
        </div>
    </div>
  );
}

export default Dimension;