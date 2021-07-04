import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateNotes from './components/CreateNotes';

const LOCAL_STORAGE_KEY = "notes";
const App = () =>
{

  const [itemArr, setItemArr] = useState([]);

  useEffect(() =>
  {
    const retriveNotes = JSON.parse(localStorage.getItem("notes"));
    if (retriveNotes) setItemArr(retriveNotes)
  }, [])

  useEffect(() =>
  {
    if (itemArr) localStorage.setItem("notes", JSON.stringify(itemArr));
  }, [itemArr])

  return (
    <>
      <Header />
      <CreateNotes setItemArr={setItemArr} itemArr={itemArr} />
    </>
  );
}

export default App;
