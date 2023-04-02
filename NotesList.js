import Note from './Note';
import NewNote from './NewNote';

const NotesList = ({
    notes, 
    handleAddNote, 
    handleDeleteNote
}) => {
    return ( 
    <div className='notes-list'>
        {notes.map((note) => (
        <Note 
        id={note.id} 
        text={note.text} 
        date={note.date}
        handleDeleteNote={handleDeleteNote}
        />
        ))}
        <NewNote handleAddNote={handleAddNote}/>
    </div>
    
    );
}

export default NotesList;