import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArtistItem.css';

const ArtistItem = ({ artistName, artistId }) => (

  <Link to={`/albums/${artistId}/${artistName}`}>
    <li className={styles.artistItem}>
      <h1>{artistName}</h1>
      <p>{artistId}</p>
    </li>
  </Link>
);

ArtistItem.propTypes = {
  artistName: PropTypes.string,
  artistId: PropTypes.string
};

export default ArtistItem;
