import React from 'react';
import { fetchCharacters } from '../../services/characters';
import { useEffect, useState } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import Controls from '../../components/Characters/Controls';

export default function Characters() {
  const [data, setData] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>LOTR Characters</h1>
      <Controls {...{ race, setRace, handleClick, query, setQuery }} />
      <CharacterList characters={data} />
    </div>
  );
}
