import React, { useState } from 'react';
import MapComponent from './MapComponent';
import ObservationForm from './ObservationForm';
import { saveVote, getMostPopularObservation } from './functions';

function App() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [mostPopularObservation, setMostPopularObservation] = useState(null);

  const handleVote = async (voteValue) => {
    if (currentPosition) {
      const street = "Some Street"; // Extract from currentPosition
      await saveVote(voteValue, street);
      const observation = await getMostPopularObservation(street);
      setMostPopularObservation(observation);
    }
  };

  return (
    <div className="App">
      <MapComponent
        setCurrentPosition={setCurrentPosition}
      />
      <ObservationForm
        handleVote={handleVote}
      />
      <div id="street-sense">
        {mostPopularObservation ? `Most popular observation: ${mostPopularObservation}` : "No observations yet."}
      </div>
    </div>
  );
}

export default App;
