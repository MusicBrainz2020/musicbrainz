import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistInput from '../components/artist/Form';
import styles from './ArtistContainer.css';
import useArtists from '../hooks/artistHook';
import Paging from '../components/paging/Paging';

const ArtistContainer = () => {
  const { artistName, handleChange, handleSubmit, artistArray, currentPage, handlePreviousClick, handleNextClick } = useArtists();

  // const nameNoSpace = artistName.replace(/\s/g, '-');

  return (
    <section className={styles.Container}>
      <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
      <ArtistInput artistName={artistName} onChange={handleChange} onSubmit={handleSubmit} />
      <ArtistList artistArray={artistArray} artistName={artistName} />
      <Paging handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} currentPage={currentPage} />
    </section>
  );
};

export default ArtistContainer;
