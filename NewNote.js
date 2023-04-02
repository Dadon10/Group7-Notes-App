import { useState } from 'react';

const NewNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
        
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
          handleAddNote(noteText);
          setNoteText('');
        }
    }; 

    return (
        <div className="note new">
            <textarea 
            rows='8'
            cols='10'
            placeholder="Take a note..."
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
};

export default NewNote;