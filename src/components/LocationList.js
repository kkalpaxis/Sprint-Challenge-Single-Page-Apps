import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const LocationList = props => {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    const getLocations = () => {
      axios
      .get(`https://rickandmortyapi.com/api/locations/`)
      .then(response => {
        setLocations(response.data)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    getLocations()
  }, []);

  return (
    <div className='location-list grid-view'>
      {locations.map(location => (
        <LocationDetails key={location.id} location={location} />
      ))}
    </div>
  );
};

function LocationDetails ({ location }) {
  const { name, type, dimension } = location;
  return (
    <NavLink to={`/locations/${id}`}>
    <div className="location-card">
      <h2>{name}</h2>
      <div className="location-type">
        Type: <h5>{type}</h5>
      </div>
      <div className="location-dimension">
        Dimension: <h5>{dimension}</h5>
      </div>
    </div>
    </NavLink>
  );
}

export default LocationList;