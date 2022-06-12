import { useEffect, useState } from 'react';

import './App.css';

import { getImages } from './services/api';

import NavBar from './components/NavBar.jsx';
import BreadCrumb from './components/Breadcrumb';
import Images from './components/Images';
import SnackBar from './components/SnackBar';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('cars');
  const [count, setCount] = useState(10);
  const [open, toggleSnack] = useState(false);

  useEffect(() => {
    if(count < 3 || count > 200){
      toggleSnack(true);
      return;
    }
    toggleSnack(false);

    const getData = async () => {
      await getImages(text, count).then(response => {
        setData(response.data.hits);
      }); 
    }
    getData();
  }, [text, count])
  
  const onTextChange = (text) => {
    setText(text);
  }

  const onCountChange = (count) => {
    setCount(count);
  }

  return (
    <div className="App">
      <NavBar/>
      <BreadCrumb onTextChange={onTextChange} onCountChange={onCountChange}/>
      <Images data={data}/>
      <SnackBar open={open} toggleSnack={toggleSnack} />
    </div>
  );
}

export default App;
