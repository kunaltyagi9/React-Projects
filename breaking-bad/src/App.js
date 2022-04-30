import { useEffect, useState } from 'react';

import Header from './components/Header';
import Characters  from './components/Characters';

import { Box } from '@mui/material';
import { fetchData } from './service/api';

const App = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(text)
      setData(result.data)
      console.log(result);
    }
    getData();
  }, [text]);

  const getText = (text) => {
    setText(text);
    console.log(text);
  }

  return (
    <Box>
      <Header getText={getText} />
      <Characters data={data} />
    </Box>
  );
}

export default App;
