import React, { useEffect, useState } from 'react';
import List from '../components/List';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      if (res.status === 200) {
        const data = await res.json();
        setItems(data.results);
      } else {
        setItems([]);
      }
    }
    fetchData();
  }, []);
    
    console.log('render');
    return <List items={items}/>
};

export default Home;
