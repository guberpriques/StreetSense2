import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ObservationForm({ handleVote }) {
  const [selectedObservation, setSelectedObservation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedObservation) {
      alert('Please select an observation');
      return;
    }
    handleVote(selectedObservation);
  };

  return (
    <form id="observation-form" onSubmit={handleSubmit}>
      {/* Add radio buttons for observations */}
      <button type="submit">Submit</button>
    </form>
  );
}

ObservationForm.propTypes = {
  handleVote: PropTypes.func.isRequired,
};

export default ObservationForm;
