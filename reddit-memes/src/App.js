import { useEffect, useState } from 'react';
import './App.css';
import { getData } from './service/api';
import { Box } from '@material-ui/core';
import Images from './components/Images';

function App() {
  
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      await getData().then(response => {
        setData(response.data.data.children);
      });
    }
    getImages();
  }, []);


  return (
    <Box className="App">
      <Images data={data} />
    </Box>
  );
}

export default App;
