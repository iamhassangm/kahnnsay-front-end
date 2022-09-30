import React, { useState, useEffect} from 'react';
import axios from 'axios';


export default function LibraryCard(props) {
  const API_URL = "http://localhost:3000/api/v1";
  const [libraryDetails, setLibraryDetails] = useState(null);

  const getLibraryDetails = () => {
    axios.get(`${API_URL}/libraries/${props.id}`)
    .then((resp) => { setLibraryDetails(resp.data) })
    .catch((e) => console.log("Error from Library comp", e))
  }

  useEffect(() => {
    getLibraryDetails();
  }, []);
  
  if (!libraryDetails) {
    return null;
  }
  
  return (
    <div id={props.id} className="library text-white text-left">
      <h3 className="mb-3 font-sans text-2xl font-semibold">{libraryDetails.name}</h3>
    
      <h5 className="text-xs text-white/80">LOCATION</h5>
      <h5 className="mb-2 text-base font-bold">
        LAT {libraryDetails.location.lat}, LON {libraryDetails.location.lon}
      </h5>
    
      <h5 className="text-xs text-white/80">MEMBERSHIP</h5>
      <h5 className="mb-2 text-base font-bold"> {libraryDetails.membership}</h5>

    </div>
  )
}