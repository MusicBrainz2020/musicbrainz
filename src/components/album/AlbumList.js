import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import styles from './AlbumList.css';

const AlbumList = ({ albumArray, artistName }) => {

  const albumElements = albumArray.map((album, i) => (
    <li key={i}>
      <AlbumItem albumId={album.albumId} albumTitle={album.albumTitle} artistName={artistName} />
    </li>
  ));

  return (
    <ul className={styles.Albums}>
      {albumElements}
    </ul>
  );
};

AlbumList.propTypes = {
  albumArray: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
}

export default AlbumList;
