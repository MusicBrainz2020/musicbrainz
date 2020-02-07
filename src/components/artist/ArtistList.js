import React from 'react';
import ArtistItem from './ArtistItem.js';
import styles from './ArtistItem.css';
import useArtists from '../../hooks/artistHook';



const ArtistList = () => {
  const { artistArray } = useArtists();
  console.log(artistArray, "ON LIST PAGE");

  const artistItemElements = artistArray.map(({ artistName, artistId }) => (
    <ArtistItem key={artistId} artistId={artistId} artistName={artistName} />
  ));
  
  return (
    <section className={styles.artistList}>
      <ul>
        {artistItemElements}
      </ul>
    </section>
  );


};

export default ArtistList;
