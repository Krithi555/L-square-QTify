import { useState, useEffect } from "react";
import { Box, Tabs, Tab } from '@mui/material';
import Section from "../Section/Section";
import styles from "./SongSection.module.css";

const SongSection = () => {
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Fetch genres - API returns array directly
    fetch('https://qtify-backend.labs.crio.do/genres')
      .then(res => res.json())
      .then(data => {
        // data is already an array of genres
        setGenres([{ id: 'all', name: 'All' }, ...data]);
      })
      .catch(err => console.error('Genres error:', err));
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Dynamic API URL based on tab selection
  const getSongsApi = value === 0 
    ? 'https://qtify-backend.labs.crio.do/songs'
    : `https://qtify-backend.labs.crio.do/songs?genre=${genres[value]?.id}`;

  return (
    <div className={styles.songsSection}>
      <Box sx={{ borderBottom: 1, borderColor: '#34CA48', width: '100%' }}>
        <Tabs value={value} onChange={handleChange} className={styles.tabs}>
          {genres.map((genre, index) => (
            <Tab 
              key={genre.id || index} 
              label={genre.name} 
              className={styles.tab} 
            />
          ))}
        </Tabs>
      </Box>
      
      {/* Pass dynamic API to existing Section component */}
      <Section 
        title="Songs"
        api={getSongsApi}
        disableShowAll={true}
      />
    </div>
  );
};

export default SongSection;
