import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecordingsList from '../components/recordings/RecordingsList';
import getRecordings from '../components/services/getRecordings';

const Recordings = ({ match }) => {
  const [recordingsArray, setRecordingsArray] = useState([]);

  useEffect(() => {
    getRecordings(match.params.albumId)
      .then(receivedRecordingsArray => setRecordingsArray(receivedRecordingsArray));
  }, []);

  return (
    <>
      <RecordingsList recordingsArray={recordingsArray} artistName={match.params.artistName} />
    </>);
};

Recordings.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      albumId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Recordings;
