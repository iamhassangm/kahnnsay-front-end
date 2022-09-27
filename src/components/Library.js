import {React, useState, useEffect} from 'react';
import axios from 'axios';


export default function Library(props) {
  const API_URL = "http://localhost:3000/api/v1";
  const [libraryDetails, setLibraryDetails] = useState(null);

  const getLibraryDetails = () => {
    axios.get(`${API_URL}/library/${props.id}`)
    .then((resp) => { setLibraryDetails(resp.data) })
    .catch((e) => console.log("Error from Library comp", e))
  }

  useEffect(() => {
    getLibraryDetails();
  }, []);
  
  
  if (!libraryDetails) {
    return null;
  }
  const library = {id: 0, title: "DHA"};
  return (
    <div id={props.id} className="library">
      <h2>Title: {libraryDetails.name}</h2>
      <h3>Location: Lat {libraryDetails.location.lat} Lon {libraryDetails.location.lon}</h3>
      <h3>Membership: {libraryDetails.membership}</h3>
    </div>
  )
}