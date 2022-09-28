import React, { useState, useEffect} from 'react';
import axios from 'axios';


export default function LibraryCard(props) {
  // const API_URL = "http://localhost:3000/api/v1";
  const [libraryDetails, setLibraryDetails] = useState(null);
  //
  // const getLibraryDetails = () => {
  //   axios.get(`${API_URL}/library/${props.id}`)
  //   .then((resp) => { setLibraryDetails(resp.data) })
  //   .catch((e) => console.log("Error from Library comp", e))
  // }
  //
  useEffect(() => {
    // getLibraryDetails();
     setLibraryDetails({id: 0, name: "DHA", location: {lat: 1, lon: 3}, membership: "Some text"})
  }, []);
  //
 
  
  if (!libraryDetails) {
    return null;
  }
  
  return (
    <div id={props.id} className="library">
      <h2>Title: {libraryDetails.name}</h2>
      <h3>Location: Lat {libraryDetails.location.lat} Lon {libraryDetails.location.lon}</h3>
      <h3>Membership: {libraryDetails.membership}</h3>
    </div>
  )
}