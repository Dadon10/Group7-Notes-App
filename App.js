import {useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import SearchNotes from "./components/SearchNotes";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const[darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-app-data')
    );
    setNotes(savedNotes);
  
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleModeDarkMode={setDarkMode}/>
      <SearchNotes handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      /></div>
    </div>
    
  );
};

export default App;