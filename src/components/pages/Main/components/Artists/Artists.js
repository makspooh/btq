import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Artist from '../Artist';

import { ARTISTS } from '../../../../../utils/constants/artists';

import styles from './Artists.module.scss';

function Artists() {
  const [artistsData, setArtistsData] = useState(cloneDeep(ARTISTS));

  const handleArtistClick = (artist) => () => {
      const artistIndex = artistsData.findIndex((el) => el.name === artist.name);
      
      setArtistsData((prev) => {
          return prev.map((el, index) => {
              const output = cloneDeep(el);

              if (index === artistIndex) {
                  output.isOpen = !output.isOpen;
              }

              return output;
          });
      });
  };

  const renderArtists = () => {
        return artistsData.map((artist) => {
            const { name } = artist;
  
            return (
                <Artist
                    key={name}
                    artistItem={artist}
                    handleClick={handleArtistClick}
                />
            );
        });
    };

    return (
        <div className={styles.artists}>
          {renderArtists()}
        </div>
    );
}

export default Artists;
